"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_module_1 = require("../../database/database.module");
const characteristic_database_1 = require("./characteristic.database");
const characteristic_entity_1 = require("./characteristic.entity");
const characteristic_mapper_1 = require("./characteristic.mapper");
let CharacteristicModule = class CharacteristicModule {
};
CharacteristicModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([characteristic_entity_1.CharacteristicEntity]), database_module_1.DatabaseModule],
        providers: [characteristic_database_1.CharacteristicDatabase, characteristic_mapper_1.CharacteristicMapper],
        exports: [characteristic_mapper_1.CharacteristicMapper],
    })
], CharacteristicModule);
exports.CharacteristicModule = CharacteristicModule;
//# sourceMappingURL=characteristic.module.js.map