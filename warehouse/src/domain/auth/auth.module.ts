import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import cfg from '@/cfg';

import { TimeUtil } from '../../utils/time.util';
import { CompanyModule } from '../company/company.module';
import { UserModule } from '../user/user.module';
import { UserPasswordModule } from '../user-password/user-password.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//Its a raw module, change auth in future, never use for external users
@Module({
  imports: [
    CompanyModule,
    UserModule,
    UserPasswordModule,
    JwtModule.register({
      secret: cfg.auth.jwtSecret,
      signOptions: { expiresIn: TimeUtil.ONE_DAY_IN_MILLISECONDS },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
