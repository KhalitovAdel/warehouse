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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const route_enum_1 = require("../../@enum/route.enum");
const context_interceptor_1 = require("../../context/context.interceptor");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
let AuthController = class AuthController {
    constructor(service, request) {
        this.service = service;
    }
    getLoginPasswordFromBasic(token) {
        const decrypted = Buffer.from(token.split(' ')[1], 'base64').toString();
        const [email, password] = decrypted.split(':', 2);
        return { email, password };
    }
    createUserByEmailAndPassword(body) {
        return this.service.createProfile(body);
    }
    loginUserByEmailAndPassword(auth) {
        const { email, password } = this.getLoginPasswordFromBasic(auth);
        return this.service.loginByEmailPassword(email, password);
    }
};
__decorate([
    common_1.UseInterceptors(context_interceptor_1.ContextInterceptor),
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.CreateProfileDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createUserByEmailAndPassword", null);
__decorate([
    common_1.UseInterceptors(context_interceptor_1.ContextInterceptor),
    common_1.Get(),
    common_1.HttpCode(common_1.HttpStatus.ACCEPTED),
    __param(0, common_1.Headers('Authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "loginUserByEmailAndPassword", null);
AuthController = __decorate([
    common_1.Controller(route_enum_1.Route.AUTH),
    __param(1, common_1.Inject(core_1.REQUEST)),
    __metadata("design:paramtypes", [auth_service_1.AuthService, Object])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map