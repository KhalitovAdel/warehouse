import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt } from 'passport-jwt';

import { ErrorEnum } from '../../@enum/error.enum';
import { Context } from '../../context/context';
import { ErrorDefault } from '../../error.default';
import { UserMapper } from '../user/user.mapper';
import { IJwtData } from './interface/jwt-data.interface';

@Injectable()
export class JwtStrategy extends AuthGuard('jwt') {
  constructor(
    @Inject(UserMapper) protected readonly userMapper: UserMapper,
    protected readonly jwtService: JwtService,
    @Inject(Context) protected readonly ctx: Context,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest();
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
    if (!token) throw new ErrorDefault(ErrorEnum.UNAUTHORIZED);
    const jwt = await this.jwtService.verifyAsync<IJwtData>(token).catch(() => {
      throw new ErrorDefault(ErrorEnum.UNAUTHORIZED);
    });

    const user = await this.userMapper.read(jwt.sub);
    if (!user) throw new ErrorDefault(ErrorEnum.UNAUTHORIZED);
    this.ctx.setUser(user);

    return true;
  }
}
