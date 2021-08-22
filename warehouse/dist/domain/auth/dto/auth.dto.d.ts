import { CreateCompanyDto } from '../../company/dto/company.dto';
import { CreateUserDto } from '../../user/dto/user.dto';
import { UserPasswordEntity } from '../../user-password/user-password.entity';
declare const AuthCreateUser_base: import("@nestjs/common").Type<Pick<CreateUserDto, "firstName" | "lastName" | "middleName" | "email"> & Pick<UserPasswordEntity, "password">>;
export declare class AuthCreateUser extends AuthCreateUser_base {
}
export declare class CreateProfileDto {
    user: AuthCreateUser;
    company: CreateCompanyDto;
    companyId?: number;
}
export {};
