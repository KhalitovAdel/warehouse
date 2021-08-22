"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_module_1 = require("../../database/database.module");
const module_util_1 = require("../../utils/module.util");
const user_password_module_1 = require("../user-password/user-password.module");
const user_crud_seed_1 = require("./seed/user-crud.seed");
const user_database_1 = require("./user.database");
const user_entity_1 = require("./user.entity");
const user_mapper_1 = require("./user.mapper");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module(module_util_1.ModuleUtil.load({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]), database_module_1.DatabaseModule],
        providers: [user_database_1.UserDatabase, user_mapper_1.UserMapper],
        exports: [user_mapper_1.UserMapper],
    }, {
        imports: [user_password_module_1.UserPasswordModule],
        providers: [user_crud_seed_1.UserCrudSeed],
    }))
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map