"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamPriceDtp = exports.UpdatePriceDto = exports.CreatePriceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const price_entity_1 = require("../price.entity");
class CreatePriceDto extends swagger_1.PickType(price_entity_1.PriceEntity, ['skuId', 'price']) {
}
exports.CreatePriceDto = CreatePriceDto;
class UpdatePriceDto extends swagger_1.PickType(price_entity_1.PriceEntity, ['price']) {
}
exports.UpdatePriceDto = UpdatePriceDto;
class ParamPriceDtp extends swagger_1.PickType(price_entity_1.PriceEntity, ['id']) {
}
exports.ParamPriceDtp = ParamPriceDtp;
//# sourceMappingURL=price.dto.js.map