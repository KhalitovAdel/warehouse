import { HttpStatus, INestApplication } from '@nestjs/common';
import * as _ from 'lodash';
import * as request from 'supertest';

import { ErrorEnum, ErrorInputDescription } from '../../@enum/error.enum';
import { Route } from '../../@enum/route.enum';
import { DatabaseService } from '../../database/database.service';
import { initApplication } from '../../test/app.init';
import { CompanyModule } from '../company/company.module';
import { CompanyCrudSeed } from '../company/seed/company-crud.seed';
import { UserCrudSeed } from '../user/seed/user-crud.seed';
import { UserModule } from '../user/user.module';
import { AuthModule } from './auth.module';
import { AuthService } from './auth.service';
import { CreateProfileDto } from './dto/auth.dto';
import { IJwtData } from './interface/jwt-data.interface';
import { createProfile } from './seed/auth.seed';

const generateJwtSnapshot = () => ({
  sub: expect.any(Number),
  companyId: expect.any(Number),
  iat: expect.any(Number),
  exp: expect.any(Number),
});

const validateJwt = (jwtData: IJwtData | null) => {
  expect(jwtData).toMatchSnapshot(generateJwtSnapshot());
  expect(Object.keys(jwtData || {}).length).toEqual(4);
};

describe('Auth', () => {
  let app: INestApplication;
  let httpServer: any;
  let dbService: DatabaseService;
  let companyCrudSeed: CompanyCrudSeed;
  let authService: AuthService;
  let userCrudSeed: UserCrudSeed;

  beforeAll(async (done) => {
    try {
      app = await initApplication({
        imports: [AuthModule, CompanyModule, UserModule],
      });

      dbService = app.get<DatabaseService, DatabaseService>(DatabaseService);
      companyCrudSeed = await app.get<CompanyCrudSeed, CompanyCrudSeed>(CompanyCrudSeed);
      authService = await app.resolve(AuthService);
      userCrudSeed = app.get(UserCrudSeed);
      await app.init();
      httpServer = app.getHttpServer();
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  beforeEach(async (done) => {
    try {
      await dbService.clearDatabase();
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  afterEach(async (done) => {
    try {
      await dbService.clearDatabase();
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  afterAll(async (done) => {
    try {
      await app.close();
      done();
    } catch (e) {
      done.fail(e);
    }
  });

  describe('Create profile', () => {
    it('should profile create', async (done) => {
      try {
        const { status, body } = await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        expect(status).toEqual(HttpStatus.CREATED);
        expect(body?.token).toBeDefined();
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it("shouldn't create doubles while creating profile", async (done) => {
      try {
        await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        const { status, body } = await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        const countOfCompany = await companyCrudSeed.count({});

        expect(status).toEqual(HttpStatus.BAD_REQUEST);
        expect(body?.data?.email).toEqual(ErrorInputDescription[ErrorInputDescription.UNIQUE_FIELD]);
        expect(body?.code).toEqual(ErrorEnum[ErrorEnum.INVALID_INPUT]);
        expect(body?.statusCode).toEqual(HttpStatus.BAD_REQUEST);
        expect(countOfCompany).toEqual(1);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should profile create with uppercase email as result save lowercase', async (done) => {
      try {
        const email = 'tRololo@email.com';
        const payload = _.cloneDeep(createProfile);
        payload.user.email = email;
        await request(httpServer)
          .post('/' + Route.AUTH)
          .send(payload);

        const count = await userCrudSeed.count({ where: { email: email.toLowerCase() } });
        expect(count).toEqual(1);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it("shouldn't profile create with random companyId", async (done) => {
      try {
        const { user } = createProfile;
        const { status, body } = await request(httpServer)
          .post('/' + Route.AUTH)
          .send({ user, companyId: 110241 } as CreateProfileDto);

        expect(status).toEqual(HttpStatus.BAD_REQUEST);
        expect(body?.code).toEqual(ErrorEnum[ErrorEnum.NOT_NULL_EXPECTED]);
        expect(body?.statusCode).toEqual(HttpStatus.BAD_REQUEST);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should profile create and receive correct jwt', async (done) => {
      try {
        const { body } = await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        expect(body.token).toBeDefined();
        const jwtData: IJwtData | null = authService['decryptJwt'](body.token);
        validateJwt(jwtData);
        done();
      } catch (e) {
        done.fail(e);
      }
    });
  });

  describe('Login profile', () => {
    it('should profile login', async (done) => {
      try {
        await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        const { status, body } = await request(httpServer)
          .get('/' + Route.AUTH)
          .set(
            'Authorization',
            'basic ' + Buffer.from(`${createProfile.user.email}:${createProfile.user.password}`).toString('base64'),
          );

        expect(status).toEqual(HttpStatus.ACCEPTED);
        expect(body?.token).toBeDefined();

        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it("shouldn't profile login with random email", async (done) => {
      try {
        await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        const { status, body } = await request(httpServer)
          .get('/' + Route.AUTH)
          .set(
            'Authorization',
            'basic ' + Buffer.from(`${createProfile.user.email}c:${createProfile.user.password}`).toString('base64'),
          );

        expect(status).toEqual(HttpStatus.BAD_REQUEST);
        expect(body?.code).toEqual(ErrorEnum[ErrorEnum.INVALID_CREDENTIALS]);
        expect(body?.statusCode).toEqual(HttpStatus.BAD_REQUEST);

        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it("shouldn't profile login with random password", async (done) => {
      try {
        await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile);

        const { status, body } = await request(httpServer)
          .get('/' + Route.AUTH)
          .set(
            'Authorization',
            'basic ' + Buffer.from(`${createProfile.user.email}:${createProfile.user.password}c`).toString('base64'),
          );

        expect(status).toEqual(HttpStatus.BAD_REQUEST);
        expect(body?.code).toEqual(ErrorEnum[ErrorEnum.INVALID_CREDENTIALS]);
        expect(body?.statusCode).toEqual(HttpStatus.BAD_REQUEST);

        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should profile login and receive correct jwt', async (done) => {
      try {
        await request(httpServer)
          .post('/' + Route.AUTH)
          .send(createProfile)
          .catch((e) => {
            throw e;
          });

        const { body } = await request(httpServer)
          .get('/' + Route.AUTH)
          .set(
            'Authorization',
            'basic ' + Buffer.from(`${createProfile.user.email}:${createProfile.user.password}`).toString('base64'),
          );

        expect(body.token).toBeDefined();
        const jwtData: IJwtData | null = authService['decryptJwt'](body.token);
        validateJwt(jwtData);

        done();
      } catch (e) {
        done.fail(e);
      }
    });
  });
});
