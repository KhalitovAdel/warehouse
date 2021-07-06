import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@Inject(Connection) protected readonly connection: Connection) {}

  get entities() {
    return this.connection.entityMetadatas.map(({ name, tableName }) => ({ name, tableName }));
  }

  async clearDatabase() {
    try {
      for (const entity of this.entities) {
        const repository = await this.connection.getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName};`);
      }
    } catch (error) {
      throw new Error(`ERROR: Cleaning test db: ${error}`);
    }
  }
}
