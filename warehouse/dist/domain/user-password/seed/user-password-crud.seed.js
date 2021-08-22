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
exports.UserPasswordCrudSeed = void 0;
const common_1 = require("@nestjs/common");
const cfg = require("config");
const EntityManager_1 = require("typeorm/entity-manager/EntityManager");
const namespace_enum_1 = require("../../../@enum/namespace.enum");
const database_default_1 = require("../../../database/database.default");
const user_password_entity_1 = require("../user-password.entity");
let UserPasswordCrudSeed = class UserPasswordCrudSeed extends database_default_1.DatabaseDefault {
    constructor(session) {
        super(user_password_entity_1.UserPasswordEntity, session, 'userId');
        this.session = session;
    }
    create(params) {
        const password = cfg.get('profile.defaultPassword');
        return super.create((Array.isArray(params) ? params.map((el) => (Object.assign({ password }, el))) : Object.assign({ password }, params)));
    }
};
UserPasswordCrudSeed = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_SINGLETON])),
    __metadata("design:paramtypes", [EntityManager_1.EntityManager])
], UserPasswordCrudSeed);
exports.UserPasswordCrudSeed = UserPasswordCrudSeed;
//# sourceMappingURL=user-password-crud.seed.js.map