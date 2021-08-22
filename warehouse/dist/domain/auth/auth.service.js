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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const cfg = require("config");
const error_enum_1 = require("../../@enum/error.enum");
const error_default_1 = require("../../error.default");
const company_mapper_1 = require("../company/company.mapper");
const user_mapper_1 = require("../user/user.mapper");
const user_password_mapper_1 = require("../user-password/user-password.mapper");
let AuthService = class AuthService {
    constructor(userMapper, companyMapper, jwtService, userPasswordMapper) {
        this.userMapper = userMapper;
        this.companyMapper = companyMapper;
        this.jwtService = jwtService;
        this.userPasswordMapper = userPasswordMapper;
    }
    generateJwt(user) {
        const { id: sub, companyId } = user;
        return this.jwtService.sign({ sub, companyId });
    }
    encryptPassword(password) {
        return bcrypt.hash(password, cfg.get('auth.saltRound'));
    }
    comparePassword(rawPassword, encryptedPassword) {
        return bcrypt.compare(rawPassword, encryptedPassword);
    }
    async createProfile(params) {
        const company = params.companyId
            ? await this.companyMapper.read(params.companyId)
            : await this.companyMapper.create(params.company);
        const _a = params.user, { password } = _a, other = __rest(_a, ["password"]);
        const userObject = Object.assign(Object.assign({}, other), { companyId: company.id });
        const user = await this.userMapper.create(userObject);
        await this.userPasswordMapper.create({ userId: user.id, password: await this.encryptPassword(password) });
        return { token: this.generateJwt(user) };
    }
    async loginByEmailPassword(email, password) {
        const user = await this.userMapper.findUserByEmail(email);
        const userPassword = await this.userPasswordMapper.read(user.id);
        if (!user || !userPassword)
            throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.INVALID_CREDENTIALS);
        if (!(await this.comparePassword(password, userPassword.password)))
            throw new error_default_1.ErrorDefault(error_enum_1.ErrorEnum.INVALID_CREDENTIALS);
        return { token: this.generateJwt(user) };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_mapper_1.UserMapper,
        company_mapper_1.CompanyMapper,
        jwt_1.JwtService,
        user_password_mapper_1.UserPasswordMapper])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map