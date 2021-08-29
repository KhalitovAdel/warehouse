import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import cfg from '@/cfg';

import { ErrorEnum } from '../../@enum/error.enum';
import { ErrorDefault } from '../../error.default';
import { CompanyMapper } from '../company/company.mapper';
import { CreateUserDto } from '../user/dto/user.dto';
import { UserEntity } from '../user/user.entity';
import { UserMapper } from '../user/user.mapper';
import { UserPasswordMapper } from '../user-password/user-password.mapper';
import { CreateProfileDto } from './dto/auth.dto';
import { IJwtData } from './interface/jwt-data.interface';

@Injectable()
export class AuthService {
  constructor(
    protected readonly userMapper: UserMapper,
    protected readonly companyMapper: CompanyMapper,
    protected readonly jwtService: JwtService,
    protected readonly userPasswordMapper: UserPasswordMapper,
  ) {}

  protected generateJwt(user: UserEntity) {
    const { id: sub, companyId } = user;

    return this.jwtService.sign({ sub, companyId } as IJwtData);
  }

  protected decryptJwt(token: string): IJwtData | null {
    return this.jwtService.decode(token) as any as IJwtData;
  }

  protected encryptPassword(password: string) {
    return bcrypt.hash(password, cfg.auth.saltRound);
  }

  protected comparePassword(rawPassword: string, encryptedPassword: string) {
    return bcrypt.compare(rawPassword, encryptedPassword);
  }

  public async createProfile(params: CreateProfileDto) {
    const company = params.companyId
      ? await this.companyMapper.read(params.companyId)
      : await this.companyMapper.create(params.company);

    if (!company) throw new ErrorDefault(ErrorEnum.NOT_NULL_EXPECTED);

    const { password, ...other } = params.user;

    const userObject: CreateUserDto = {
      ...other,
      companyId: company.id,
    };

    const user = await this.userMapper.create(userObject);

    await this.userPasswordMapper.create({ userId: user.id, password: await this.encryptPassword(password) });

    return { token: this.generateJwt(user) };
  }

  public async loginByEmailPassword(email: string, password: string) {
    const user = await this.userMapper.findUserByEmail(email.toLowerCase());
    if (!user) throw new ErrorDefault(ErrorEnum.INVALID_CREDENTIALS);
    const userPassword = await this.userPasswordMapper.read(user.id);
    if (!userPassword) throw new ErrorDefault(ErrorEnum.INVALID_CREDENTIALS);
    if (!(await this.comparePassword(password, userPassword.password)))
      throw new ErrorDefault(ErrorEnum.INVALID_CREDENTIALS);

    return { token: this.generateJwt(user) };
  }
}
