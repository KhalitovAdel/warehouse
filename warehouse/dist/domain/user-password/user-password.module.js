"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_module_1 = require("../../database/database.module");
const module_util_1 = require("../../utils/module.util");
const user_password_crud_seed_1 = require("./seed/user-password-crud.seed");
const user_password_database_1 = require("./user-password.database");
const user_password_entity_1 = require("./user-password.entity");
const user_password_mapper_1 = require("./user-password.mapper");
let UserPasswordModule = class UserPasswordModule {
};
UserPasswordModule = __decorate([
    common_1.Module(module_util_1.ModuleUtil.load({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_password_entity_1.UserPasswordEntity]), database_module_1.DatabaseModule],
        providers: [user_password_database_1.UserPasswordDatabase, user_password_mapper_1.UserPasswordMapper],
        exports: [user_password_mapper_1.UserPasswordMapper],
    }, {
        providers: [user_password_crud_seed_1.UserPasswordCrudSeed],
    }))
], UserPasswordModule);
exports.UserPasswordModule = UserPasswordModule;
//# sourceMappingURL=user-password.module.js.map