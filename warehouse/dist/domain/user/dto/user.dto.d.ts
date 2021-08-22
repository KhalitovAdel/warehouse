import { UserEntity } from '../user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserEntity, "firstName" | "lastName" | "middleName" | "email" | "companyId">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<Pick<UserEntity, "firstName" | "lastName" | "middleName" | "email">>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
declare const UserParamDto_base: import("@nestjs/common").Type<Pick<UserEntity, "id">>;
export declare class UserParamDto extends UserParamDto_base {
}
export {};
