import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CategoryEntity } from '../category/category.entity';
import { CompanyEntity } from '../company/company.entity';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
import { MeasureEntity } from '../measure/measure.entity';
import { SkuEntity } from '../sku/sku.entity';
export declare class GoodEntity extends DatabaseDefaultEntity {
    id: number;
    name: string;
    manufacturerId?: number;
    manufacturer?: ManufacturerEntity;
    companyId: number;
    company: CompanyEntity;
    measureId: number;
    measure: MeasureEntity;
    categoryId: number;
    category: CategoryEntity;
    sku: SkuEntity[];
}
