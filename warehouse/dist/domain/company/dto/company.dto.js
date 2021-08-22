"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyParamDto = exports.UpdateCompanyDto = exports.CreateCompanyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const company_entity_1 = require("../company.entity");
class CreateCompanyDto extends swagger_1.PickType(company_entity_1.CompanyEntity, ['name']) {
}
exports.CreateCompanyDto = CreateCompanyDto;
class UpdateCompanyDto extends swagger_1.PartialType(swagger_1.PickType(company_entity_1.CompanyEntity, ['name', 'isActive'])) {
}
exports.UpdateCompanyDto = UpdateCompanyDto;
class CompanyParamDto extends swagger_1.PickType(company_entity_1.CompanyEntity, ['id']) {
}
exports.CompanyParamDto = CompanyParamDto;
//# sourceMappingURL=company.dto.js.map