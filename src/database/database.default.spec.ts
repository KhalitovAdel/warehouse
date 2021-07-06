import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Column, Entity, PrimaryGeneratedColumn, Repository } from 'typeorm';

import { DatabaseDefault } from './database.default';
import { DatabaseModule } from './database.module';
import { DatabaseService } from './database.service';

@Entity()
class ExampleDatabase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;
}
type ICreateExampleDatabase = Pick<ExampleDatabase, 'name'>;
type IUpdateExampleDatabase = ICreateExampleDatabase;

describe('DataBase default services', () => {
  let repository: Repository<ExampleDatabase>;
  let service: DatabaseDefault<ICreateExampleDatabase, IUpdateExampleDatabase, ExampleDatabase>;
  let dbService: DatabaseService;
  let app: INestApplication;

  beforeAll(async (done) => {
    try {
      const module: TestingModule = await Test.createTestingModule({
        imports: [DatabaseModule, TypeOrmModule.forFeature([ExampleDatabase])],
      }).compile();

      app = module.createNestApplication();
      dbService = app.get<DatabaseService, DatabaseService>(DatabaseService);
      await dbService.clearDatabase();
      const repositoryToken = getRepositoryToken(ExampleDatabase);
      repository = module.get(repositoryToken);
      service = new DatabaseDefault<Pick<ExampleDatabase, 'name'>, Pick<ExampleDatabase, 'name'>, ExampleDatabase>(
        ExampleDatabase,
        repository.manager,
        'id',
      );
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

  describe('CRUD works', () => {
    it('should create works', async (done) => {
      try {
        expect(await service.create({ name: 'test' })).toBeDefined();
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should find works', async (done) => {
      try {
        const result = await service.create({ name: 'test' });
        const key = 'name';
        const existsDoc = await service.fetchOne(result.id, [key]);
        expect(existsDoc).toBeDefined();
        expect(Object.keys(existsDoc || {}).length).toEqual(1);
        expect(Object.keys(existsDoc || {}).find((el) => el)).toEqual(key);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should list works', async (done) => {
      try {
        const docCount = 3;
        for (let i = 0; i < docCount; i++) {
          await service.create({ name: 'test' });
        }
        const listedResult = await service.list();
        expect(listedResult.count).toEqual(docCount);
        expect(Array.isArray(listedResult.data)).toBe(true);
        expect(listedResult.data.length).toEqual(docCount);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should create works with multiple doc', async (done) => {
      try {
        const docCount = 3;
        await service.createMany(new Array(docCount).fill({ name: 'test' } as ICreateExampleDatabase));
        const listedResult = await service.list();
        expect(listedResult.count).toEqual(docCount);
        expect(Array.isArray(listedResult.data)).toEqual(true);
        expect(listedResult.data.length).toEqual(docCount);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should update works', async (done) => {
      try {
        const result = await service.create({ name: 'test' });
        const newName = 'test2';
        await service.updateOne(result.id, { name: newName });
        const existsDoc = await service.fetchOne(result.id);
        expect(existsDoc?.name).toBe(newName);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should delete works', async (done) => {
      try {
        const result = await service.create({ name: 'test' });
        await service.delete(result.id);
        const existsDoc = await service.fetchOne(result.id);
        expect(existsDoc).toEqual(undefined);
        done();
      } catch (e) {
        done.fail(e);
      }
    });

    it('should updateMany works', async (done) => {
      try {
        const docCount = 3;
        await service.createMany(new Array(docCount).fill({ name: 'test' } as ICreateExampleDatabase));
        const newName = 'test1';
        await service.updateMany({}, { name: newName });
        const { data } = await service.list();

        expect(data.filter(({ name }) => name === newName).length).toEqual(docCount);
        done();
      } catch (e) {
        done.fail(e);
      }
    });
  });
});
