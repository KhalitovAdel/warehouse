import { PriceEntity } from '../price.entity';
declare const CreatePriceDto_base: import("@nestjs/common").Type<Pick<PriceEntity, "skuId" | "price">>;
export declare class CreatePriceDto extends CreatePriceDto_base {
}
declare const UpdatePriceDto_base: import("@nestjs/common").Type<Pick<PriceEntity, "price">>;
export declare class UpdatePriceDto extends UpdatePriceDto_base {
}
declare const ParamPriceDtp_base: import("@nestjs/common").Type<Pick<PriceEntity, "id">>;
export declare class ParamPriceDtp extends ParamPriceDtp_base {
}
export {};
