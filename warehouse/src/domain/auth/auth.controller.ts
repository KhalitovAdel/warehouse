import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Post, UseInterceptors } from '@nestjs/common';

import { Route } from '../../@enum/route.enum';
import { ContextInterceptor } from '../../context/context.interceptor';
import { AuthService } from './auth.service';
import { CreateProfileDto } from './dto/auth.dto';

@Controller(Route.AUTH)
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  protected getLoginPasswordFromBasic(token: string): { email: string; password: string } {
    const decrypted = Buffer.from(token.split(' ')[1], 'base64').toString();
    const [email, password] = decrypted.split(':', 2);

    return { email, password };
  }

  @UseInterceptors(ContextInterceptor)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createUserByEmailAndPassword(@Body() body: CreateProfileDto) {
    return this.service.createProfile(body);
  }

  @UseInterceptors(ContextInterceptor)
  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  loginUserByEmailAndPassword(@Headers('Authorization') auth: string) {
    const { email, password } = this.getLoginPasswordFromBasic(auth);

    return this.service.loginByEmailPassword(email, password);
  }
}
