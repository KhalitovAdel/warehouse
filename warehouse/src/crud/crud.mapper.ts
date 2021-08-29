import { ErrorEnum, ErrorInputDescription } from '../@enum/error.enum';
import { ErrorDefault } from '../error.default';
import { IDatabaseCRUD } from './crud.interface';

export class CrudMapperDefault<CREATE, UPDATE, ENTITY extends CREATE | UPDATE, ID_KEY extends keyof ENTITY> {
  constructor(protected readonly crud: IDatabaseCRUD<CREATE, UPDATE, ENTITY>) {}

  create(params: CREATE) {
    return this.crud.create(params);
  }

  update(id: ENTITY[ID_KEY], toUpdate: UPDATE) {
    return this.crud.updateOne(id as any as number, toUpdate);
  }

  read(id: ENTITY[ID_KEY]) {
    return this.crud.fetchOne(id as any as number);
  }

  delete(id: ENTITY[ID_KEY]) {
    return this.crud.delete(id as any as number);
  }

  protected async checkDuplicates(...uniques: Partial<ENTITY>[]) {
    for (const unique of uniques) {
      const count = await this.crud.count({ where: unique });
      if (!count) continue;
      const data = Object.keys(unique).reduce(
        (acc, curr) => ({ ...acc, [curr]: ErrorInputDescription[ErrorInputDescription.UNIQUE_FIELD] }),
        {},
      );

      throw new ErrorDefault(ErrorEnum.INVALID_INPUT, data);
    }
  }
}
