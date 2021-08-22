import { CharacteristicEntity } from '../characteristic.entity';
declare const CharacteristicCreateDto_base: import("@nestjs/common").Type<Pick<CharacteristicEntity, "value" | "type" | "title" | "skuId">>;
export declare class CharacteristicCreateDto extends CharacteristicCreateDto_base {
}
declare const CharacteristicUpdateDto_base: import("@nestjs/common").Type<Partial<Pick<CharacteristicEntity, "value" | "type" | "title">>>;
export declare class CharacteristicUpdateDto extends CharacteristicUpdateDto_base {
}
declare const CharacteristicParamDto_base: import("@nestjs/common").Type<Pick<CharacteristicEntity, "id">>;
export declare class CharacteristicParamDto extends CharacteristicParamDto_base {
}
export {};
