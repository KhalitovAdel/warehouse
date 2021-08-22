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
exports.CreateProfileDto = exports.AuthCreateUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const company_dto_1 = require("../../company/dto/company.dto");
const user_dto_1 = require("../../user/dto/user.dto");
const user_password_entity_1 = require("../../user-password/user-password.entity");
class AuthCreateUser extends swagger_1.IntersectionType(swagger_1.PickType(user_dto_1.CreateUserDto, ['firstName', 'lastName', 'middleName', 'email']), swagger_1.PickType(user_password_entity_1.UserPasswordEntity, ['password'])) {
}
exports.AuthCreateUser = AuthCreateUser;
class CreateProfileDto {
}
__decorate([
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => AuthCreateUser),
    __metadata("design:type", AuthCreateUser)
], CreateProfileDto.prototype, "user", void 0);
__decorate([
    class_validator_1.ValidateIf(({ companyId }) => !companyId),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => company_dto_1.CreateCompanyDto),
    __metadata("design:type", company_dto_1.CreateCompanyDto)
], CreateProfileDto.prototype, "company", void 0);
__decorate([
    class_validator_1.ValidateIf(({ company }) => !company),
    class_validator_1.IsNumber(),
    __metadata("design:type", Number)
], CreateProfileDto.prototype, "companyId", void 0);
exports.CreateProfileDto = CreateProfileDto;
//# sourceMappingURL=auth.dto.js.map