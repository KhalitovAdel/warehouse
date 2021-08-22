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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDatabase = void 0;
const common_1 = require("@nestjs/common");
const namespace_enum_1 = require("../../@enum/namespace.enum");
const database_default_1 = require("../../database/database.default");
const price_entity_1 = require("./price.entity");
let PriceDatabase = class PriceDatabase extends database_default_1.DatabaseDefault {
    constructor(sessionConnection) {
        super(price_entity_1.PriceEntity, sessionConnection, 'id');
        this.sessionConnection = sessionConnection;
    }
};
PriceDatabase = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_TRANSACTION])),
    __metadata("design:paramtypes", [Object])
], PriceDatabase);
exports.PriceDatabase = PriceDatabase;
//# sourceMappingURL=price.database.js.map