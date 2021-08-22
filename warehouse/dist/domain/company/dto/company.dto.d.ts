import { CompanyEntity } from '../company.entity';
declare const CreateCompanyDto_base: import("@nestjs/common").Type<Pick<CompanyEntity, "name">>;
export declare class CreateCompanyDto extends CreateCompanyDto_base {
}
declare const UpdateCompanyDto_base: import("@nestjs/common").Type<Partial<Pick<CompanyEntity, "isActive" | "name">>>;
export declare class UpdateCompanyDto extends UpdateCompanyDto_base {
}
declare const CompanyParamDto_base: import("@nestjs/common").Type<Pick<CompanyEntity, "id">>;
export declare class CompanyParamDto extends CompanyParamDto_base {
}
export {};
