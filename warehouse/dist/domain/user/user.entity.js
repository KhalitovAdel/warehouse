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
exports.UserEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const company_entity_1 = require("../company/company.entity");
let UserEntity = class UserEntity extends database_default_entity_1.DatabaseDefaultEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "middleName", void 0);
__decorate([
    class_validator_1.IsEmail(),
    typeorm_1.Column({ unique: true, nullable: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], UserEntity.prototype, "companyId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => company_entity_1.CompanyEntity),
    typeorm_1.JoinColumn({ referencedColumnName: 'id' }),
    __metadata("design:type", company_entity_1.CompanyEntity)
], UserEntity.prototype, "company", void 0);
UserEntity = __decorate([
    typeorm_1.Entity()
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map