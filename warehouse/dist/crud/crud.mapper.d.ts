import { IDatabaseCRUD } from './crud.interface';
export declare class CrudMapperDefault<ENTITY, CREATE, UPDATE, ID_KEY extends keyof ENTITY> {
    protected readonly crud: IDatabaseCRUD<ENTITY, CREATE, UPDATE>;
    constructor(crud: IDatabaseCRUD<ENTITY, CREATE, UPDATE>);
    create(params: CREATE): Promise<CREATE extends CREATE[] ? ENTITY[] : ENTITY>;
    update(id: ENTITY[ID_KEY], toUpdate: UPDATE): Promise<ENTITY>;
    read(id: ENTITY[ID_KEY]): Promise<ENTITY>;
    delete(id: ENTITY[ID_KEY]): Promise<any>;
    protected checkDuplicates(...uniques: Partial<ENTITY>[]): Promise<void>;
}
