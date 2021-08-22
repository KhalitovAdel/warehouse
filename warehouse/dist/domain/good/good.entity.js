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
exports.GoodEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const category_entity_1 = require("../category/category.entity");
const company_entity_1 = require("../company/company.entity");
const manufacturer_entity_1 = require("../manufacturer/manufacturer.entity");
const measure_entity_1 = require("../measure/measure.entity");
const sku_entity_1 = require("../sku/sku.entity");
let GoodEntity = class GoodEntity extends database_default_entity_1.DatabaseDefaultEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GoodEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], GoodEntity.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNumber(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GoodEntity.prototype, "manufacturerId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => manufacturer_entity_1.ManufacturerEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'manufacturerId' }),
    __metadata("design:type", manufacturer_entity_1.ManufacturerEntity)
], GoodEntity.prototype, "manufacturer", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], GoodEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'companyId' }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], GoodEntity.prototype, "company", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], GoodEntity.prototype, "measureId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => measure_entity_1.MeasureEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'measureId' }),
    __metadata("design:type", measure_entity_1.MeasureEntity)
], GoodEntity.prototype, "measure", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], GoodEntity.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => category_entity_1.CategoryEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'categoryId' }),
    __metadata("design:type", category_entity_1.CategoryEntity)
], GoodEntity.prototype, "category", void 0);
__decorate([
    typeorm_1.OneToMany(() => sku_entity_1.SkuEntity, (sku) => sku.goodId),
    __metadata("design:type", Array)
], GoodEntity.prototype, "sku", void 0);
GoodEntity = __decorate([
    typeorm_1.Entity()
], GoodEntity);
exports.GoodEntity = GoodEntity;
//# sourceMappingURL=good.entity.js.map