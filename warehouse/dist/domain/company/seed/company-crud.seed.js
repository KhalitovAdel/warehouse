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
exports.CompanyCrudSeed = void 0;
const common_1 = require("@nestjs/common");
const company_database_1 = require("../company.database");
const company_seed_1 = require("./company.seed");
let CompanyCrudSeed = class CompanyCrudSeed {
    constructor(companyDatabase) {
        this.companyDatabase = companyDatabase;
        this.updateOne = this.companyDatabase.updateOne.bind(this.companyDatabase);
        this.delete = this.companyDatabase.delete.bind(this.companyDatabase);
        this.fetchOne = this.companyDatabase.fetchOne.bind(this.companyDatabase);
    }
    count(query) {
        return this.companyDatabase.count(query);
    }
    create(params) {
        const defaultPayload = Array.isArray(params)
            ? params.map((el) => (Object.assign(Object.assign({}, company_seed_1.createCompany()), (el || {}))))
            : Object.assign(Object.assign({}, company_seed_1.createCompany()), params);
        return this.companyDatabase.create(defaultPayload);
    }
};
CompanyCrudSeed = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(company_database_1.CompanyDatabase)),
    __metadata("design:paramtypes", [company_database_1.CompanyDatabase])
], CompanyCrudSeed);
exports.CompanyCrudSeed = CompanyCrudSeed;
//# sourceMappingURL=company-crud.seed.js.map