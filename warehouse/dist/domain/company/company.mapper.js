"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMapper = void 0;
const common_1 = require("@nestjs/common");
const crud_mapper_1 = require("../../crud/crud.mapper");
const company_database_1 = require("./company.database");
let CompanyMapper = class CompanyMapper extends crud_mapper_1.CrudMapperDefault {
    constructor(companyDatabase) {
        super(companyDatabase);
        this.companyDatabase = companyDatabase;
    }
};
CompanyMapper = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(company_database_1.CompanyDatabase)),
    __metadata("design:paramtypes", [company_database_1.CompanyDatabase])
], CompanyMapper);
exports.CompanyMapper = CompanyMapper;
//# sourceMappingURL=company.mapper.js.map