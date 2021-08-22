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
exports.CharacteristicEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const sku_entity_1 = require("../sku/sku.entity");
const characteristic_enum_1 = require("./interface/characteristic.enum");
let CharacteristicEntity = class CharacteristicEntity extends database_default_entity_1.DatabaseDefaultEntity {
};
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CharacteristicEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], CharacteristicEntity.prototype, "skuId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => sku_entity_1.SkuEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'skuId' }),
    __metadata("design:type", sku_entity_1.SkuEntity)
], CharacteristicEntity.prototype, "sku", void 0);
__decorate([
    class_validator_1.IsEnum(Object.values(characteristic_enum_1.Characteristic)),
    typeorm_1.Column({ enum: Object.values(characteristic_enum_1.Characteristic), nullable: false }),
    __metadata("design:type", String)
], CharacteristicEntity.prototype, "type", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], CharacteristicEntity.prototype, "value", void 0);
__decorate([
    class_validator_1.ValidateIf(({ type }) => type === characteristic_enum_1.Characteristic.FREE),
    class_validator_1.IsString(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], CharacteristicEntity.prototype, "title", void 0);
CharacteristicEntity = __decorate([
    typeorm_1.Entity()
], CharacteristicEntity);
exports.CharacteristicEntity = CharacteristicEntity;
//# sourceMappingURL=characteristic.entity.js.map