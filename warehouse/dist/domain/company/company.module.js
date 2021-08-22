"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const context_module_1 = require("../../context/context.module");
const database_module_1 = require("../../database/database.module");
const module_util_1 = require("../../utils/module.util");
const company_database_1 = require("./company.database");
const company_entity_1 = require("./company.entity");
const company_mapper_1 = require("./company.mapper");
const company_crud_seed_1 = require("./seed/company-crud.seed");
let CompanyModule = class CompanyModule {
};
CompanyModule = __decorate([
    common_1.Module(module_util_1.ModuleUtil.load({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_entity_1.CompanyEntity]), database_module_1.DatabaseModule, context_module_1.ContextModule],
        providers: [company_mapper_1.CompanyMapper, company_database_1.CompanyDatabase],
        exports: [company_mapper_1.CompanyMapper],
    }, {
        providers: [company_crud_seed_1.CompanyCrudSeed],
    }))
], CompanyModule);
exports.CompanyModule = CompanyModule;
//# sourceMappingURL=company.module.js.map