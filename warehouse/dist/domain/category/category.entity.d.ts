import { DatabaseDefaultEntity } from '../../database/database.default.entity';
export declare class CategoryEntity extends DatabaseDefaultEntity {
    id: number;
    name: string;
    parent: number;
}
