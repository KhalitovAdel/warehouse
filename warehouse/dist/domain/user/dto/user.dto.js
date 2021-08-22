"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserParamDto = exports.UpdateUserDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../user.entity");
class CreateUserDto extends swagger_1.PickType(user_entity_1.UserEntity, [
    'firstName',
    'lastName',
    'middleName',
    'email',
    'companyId',
]) {
}
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto extends swagger_1.PartialType(swagger_1.PickType(user_entity_1.UserEntity, ['firstName', 'lastName', 'middleName', 'email'])) {
}
exports.UpdateUserDto = UpdateUserDto;
class UserParamDto extends swagger_1.PickType(user_entity_1.UserEntity, ['id']) {
}
exports.UserParamDto = UserParamDto;
//# sourceMappingURL=user.dto.js.map