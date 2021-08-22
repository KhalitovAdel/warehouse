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
exports.PriceEntity = void 0;
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const sku_entity_1 = require("../sku/sku.entity");
let PriceEntity = class PriceEntity extends database_default_entity_1.DatabaseDefaultEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PriceEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], PriceEntity.prototype, "skuId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => sku_entity_1.SkuEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'skuId' }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], PriceEntity.prototype, "sku", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], PriceEntity.prototype, "price", void 0);
PriceEntity = __decorate([
    typeorm_1.Entity()
], PriceEntity);
exports.PriceEntity = PriceEntity;
//# sourceMappingURL=price.entity.js.map