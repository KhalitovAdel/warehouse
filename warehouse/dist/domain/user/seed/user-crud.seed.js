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
exports.UserCrudSeed = void 0;
const common_1 = require("@nestjs/common");
const EntityManager_1 = require("typeorm/entity-manager/EntityManager");
const namespace_enum_1 = require("../../../@enum/namespace.enum");
const database_default_1 = require("../../../database/database.default");
const user_password_crud_seed_1 = require("../../user-password/seed/user-password-crud.seed");
const user_entity_1 = require("../user.entity");
const user_seed_1 = require("./user.seed");
let UserCrudSeed = class UserCrudSeed extends database_default_1.DatabaseDefault {
    constructor(session, userPasswordCrud) {
        super(user_entity_1.UserEntity, session, 'id');
        this.session = session;
        this.userPasswordCrud = userPasswordCrud;
    }
    async create(params) {
        const defaultPayload = Array.isArray(params)
            ? params.map((el) => (Object.assign(Object.assign({}, user_seed_1.createUser()), (el || {}))))
            : Object.assign(Object.assign({}, user_seed_1.createUser()), params);
        const users = await super.create(defaultPayload);
        await this.userPasswordCrud.create(users);
        return users;
    }
};
UserCrudSeed = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(namespace_enum_1.NamespaceEnum[namespace_enum_1.NamespaceEnum.SESSION_SINGLETON])),
    __param(1, common_1.Inject(user_password_crud_seed_1.UserPasswordCrudSeed)),
    __metadata("design:paramtypes", [EntityManager_1.EntityManager,
        user_password_crud_seed_1.UserPasswordCrudSeed])
], UserCrudSeed);
exports.UserCrudSeed = UserCrudSeed;
//# sourceMappingURL=user-crud.seed.js.map