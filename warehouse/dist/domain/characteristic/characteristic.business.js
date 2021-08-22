"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacteristicBusiness = void 0;
const error_enum_1 = require("../../@enum/error.enum");
const error_default_1 = require("../../error.default");
const characteristic_enum_1 = require("./interface/characteristic.enum");
class CharacteristicBusiness {
    constructor(characteristics = []) {
        this.characteristics = characteristics;
        this.charMapType = {};
        this.charMapFree = {};
        this.init();
    }
    init() {
        this.characteristics
            .filter((el) => el.isActive)
            .forEach((el) => {
            if (el.type === characteristic_enum_1.Characteristic.FREE) {
                if (el.title)
                    this.charMapFree[el.title] = el;
            }
            else {
                this.charMapType[el.type] = el;
            }
        });
    }
    checkSkuExists() {
        if (!this.characteristics[0].sku)
            throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.NOT_NULL_EXPECTED);
    }
    checkTypes(params, id) {
        const typeIsFree = params.type === characteristic_enum_1.Characteristic[characteristic_enum_1.Characteristic.FREE];
        const map = typeIsFree ? this.charMapFree : this.charMapType;
        const key = typeIsFree ? String(params.title) : params.type;
        if (!map[key])
            return;
        if (id && map[key] && map[key].id === id)
            return;
        throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.INVALID_INPUT, { [key]: error_enum_1.ErrorInputDescription.DUPLICATE_TYPE });
    }
    create(params) {
        this.checkSkuExists();
        this.checkTypes(params);
        return params;
    }
    update(params) {
        const entity = this.characteristics.find((el) => el.id === params.id);
        if (!entity)
            throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.NOT_NULL_EXPECTED);
        this.checkSkuExists();
        this.checkTypes({ type: params.type || entity.type, title: params.title || '' }, entity.id);
        const { id } = params, other = __rest(params, ["id"]);
        return other;
    }
}
exports.CharacteristicBusiness = CharacteristicBusiness;
//# sourceMappingURL=characteristic.business.js.map