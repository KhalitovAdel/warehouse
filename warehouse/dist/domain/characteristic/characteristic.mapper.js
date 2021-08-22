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
exports.CharacteristicMapper = void 0;
const common_1 = require("@nestjs/common");
const deep_object_diff_1 = require("deep-object-diff");
const crud_mapper_1 = require("../../crud/crud.mapper");
const characteristic_business_1 = require("./characteristic.business");
const characteristic_database_1 = require("./characteristic.database");
let CharacteristicMapper = class CharacteristicMapper extends crud_mapper_1.CrudMapperDefault {
    constructor(database) {
        super(database);
        this.database = database;
    }
    async fillBusiness(skuId) {
        const { data } = await this.database.list({ where: { skuId } });
        return new characteristic_business_1.CharacteristicBusiness(data);
    }
    async create(params) {
        const business = await this.fillBusiness(params.skuId);
        const create = business.create(params);
        return super.create(create);
    }
    async update(id, toUpdate) {
        const entity = await this.database.fetchOne(id);
        const business = await this.fillBusiness(entity === null || entity === void 0 ? void 0 : entity.skuId);
        const update = business.update(Object.assign({ id }, deep_object_diff_1.diff(entity, toUpdate)));
        return super.update(id, update);
    }
};
CharacteristicMapper = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [characteristic_database_1.CharacteristicDatabase])
], CharacteristicMapper);
exports.CharacteristicMapper = CharacteristicMapper;
//# sourceMappingURL=characteristic.mapper.js.map