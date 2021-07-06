import { Module } from '@nestjs/common';

import { ContextModule } from './context/context.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './domain/auth/auth.module';
import { CompanyModule } from './domain/company/company.module';
import { UserModule } from './domain/user/user.module';
import { UserPasswordModule } from './domain/user-password/user-password.module';

@Module({
  imports: [
    DatabaseModule,
    CompanyModule,
    UserModule,
    AuthModule,
    /*CharacteristicModule,*/
    /*PriceModule,*/ ContextModule,
    UserPasswordModule,
  ],
})
export class AppModule {}
