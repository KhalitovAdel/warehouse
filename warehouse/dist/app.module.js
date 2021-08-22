"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const context_module_1 = require("./context/context.module");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./domain/auth/auth.module");
const company_module_1 = require("./domain/company/company.module");
const user_module_1 = require("./domain/user/user.module");
const user_password_module_1 = require("./domain/user-password/user-password.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            database_module_1.DatabaseModule,
            company_module_1.CompanyModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            context_module_1.ContextModule,
            user_password_module_1.UserPasswordModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map