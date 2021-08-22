"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicParamDto = exports.CharacteristicUpdateDto = exports.CharacteristicCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const characteristic_entity_1 = require("../characteristic.entity");
class CharacteristicCreateDto extends swagger_1.PickType(characteristic_entity_1.CharacteristicEntity, [
    'skuId',
    'type',
    'value',
    'title',
]) {
}
exports.CharacteristicCreateDto = CharacteristicCreateDto;
class CharacteristicUpdateDto extends swagger_1.PartialType(swagger_1.PickType(characteristic_entity_1.CharacteristicEntity, ['type', 'value', 'title'])) {
}
exports.CharacteristicUpdateDto = CharacteristicUpdateDto;
class CharacteristicParamDto extends swagger_1.PickType(characteristic_entity_1.CharacteristicEntity, ['id']) {
}
exports.CharacteristicParamDto = CharacteristicParamDto;
//# sourceMappingURL=characteristic.dto.js.map