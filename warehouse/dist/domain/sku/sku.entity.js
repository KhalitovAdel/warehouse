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
exports.SkuEntity = void 0;
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const characteristic_entity_1 = require("../characteristic/characteristic.entity");
const good_entity_1 = require("../good/good.entity");
const price_entity_1 = require("../price/price.entity");
let SkuEntity = class SkuEntity extends database_default_entity_1.DatabaseDefaultEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], SkuEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToMany(() => characteristic_entity_1.CharacteristicEntity, (characteristic) => characteristic.skuId),
    __metadata("design:type", Array)
], SkuEntity.prototype, "characteristic", void 0);
__decorate([
    typeorm_1.OneToMany(() => price_entity_1.PriceEntity, (characteristic) => characteristic.skuId),
    __metadata("design:type", price_entity_1.PriceEntity)
], SkuEntity.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], SkuEntity.prototype, "goodId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => good_entity_1.GoodEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'goodId' }),
    __metadata("design:type", good_entity_1.GoodEntity)
], SkuEntity.prototype, "good", void 0);
SkuEntity = __decorate([
    typeorm_1.Entity()
], SkuEntity);
exports.SkuEntity = SkuEntity;
//# sourceMappingURL=sku.entity.js.map