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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockEntity = void 0;
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const company_entity_1 = require("../company/company.entity");
class StockEntity extends database_default_entity_1.DatabaseDefaultEntity {
}
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], StockEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], StockEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StockEntity.prototype, "address", void 0);
exports.StockEntity = StockEntity;
//# sourceMappingURL=stock.entity.js.map