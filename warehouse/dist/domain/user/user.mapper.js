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
exports.UserMapper = void 0;
const common_1 = require("@nestjs/common");
const crud_mapper_1 = require("../../crud/crud.mapper");
const user_database_1 = require("./user.database");
let UserMapper = class UserMapper extends crud_mapper_1.CrudMapperDefault {
    constructor(userDatabase) {
        super(userDatabase);
        this.userDatabase = userDatabase;
    }
    async create(params) {
        const { email } = params;
        await this.checkDuplicates({ email });
        return super.create(params);
    }
    findUserByEmail(email) {
        return this.userDatabase.fetchOne({ where: { email } });
    }
};
UserMapper = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_database_1.UserDatabase])
], UserMapper);
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map