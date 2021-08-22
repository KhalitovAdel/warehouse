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
exports.CompanyEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const database_default_entity_1 = require("../../database/database.default.entity");
const user_entity_1 = require("../user/user.entity");
let CompanyEntity = class CompanyEntity extends database_default_entity_1.DatabaseDefaultEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CompanyEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], CompanyEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.OneToMany(() => user_entity_1.UserEntity, (user) => user.companyId),
    __metadata("design:type", Array)
], CompanyEntity.prototype, "users", void 0);
CompanyEntity = __decorate([
    typeorm_1.Entity()
], CompanyEntity);
exports.CompanyEntity = CompanyEntity;
//# sourceMappingURL=company.entity.js.map