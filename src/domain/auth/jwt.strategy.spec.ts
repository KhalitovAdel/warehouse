import { Controller, Get, INestApplication, UseGuards } from '@nestjs/common';

import { initApplication } from '../../test/app.init';
import { UserModule } from '../user/user.module';
import { AuthModule } from './auth.module';
import { JwtStrategy } from './jwt.strategy';

@Controller()
export class TestCtrl {
  @UseGuards(JwtStrategy)
  @Get()
  testAuth() {
    return null;
  }
}

describe('JwtStrategy', () => {
  let app: INestApplication;
  // let userSeed: UserCrudSeed;

  beforeAll(async () => {
    app = await initApplication({
      imports: [AuthModule, UserModule],
    });

    // userSeed = app.get(UserCrudSeed);
  });

  afterAll(async () => {
    await app.close();
  });
  //
  // it('should JwtStrategy login correct', async () => {
  //   const user;
  // });
});
