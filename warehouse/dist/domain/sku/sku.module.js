"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const characteristic_module_1 = require("../characteristic/characteristic.module");
const price_module_1 = require("../price/price.module");
const sku_entity_1 = require("./sku.entity");
const sku_mapper_1 = require("./sku.mapper");
let SkuModule = class SkuModule {
};
SkuModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([sku_entity_1.SkuEntity]), characteristic_module_1.CharacteristicModule, price_module_1.PriceModule],
        providers: [sku_mapper_1.SkuMapper],
        exports: [sku_mapper_1.SkuMapper],
    })
], SkuModule);
exports.SkuModule = SkuModule;
//# sourceMappingURL=sku.module.js.map