import { JwtService } from '@nestjs/jwt';
import { CompanyMapper } from '../company/company.mapper';
import { UserEntity } from '../user/user.entity';
import { UserMapper } from '../user/user.mapper';
import { UserPasswordMapper } from '../user-password/user-password.mapper';
import { CreateProfileDto } from './dto/auth.dto';
export declare class AuthService {
    protected readonly userMapper: UserMapper;
    protected readonly companyMapper: CompanyMapper;
    protected readonly jwtService: JwtService;
    protected readonly userPasswordMapper: UserPasswordMapper;
    constructor(userMapper: UserMapper, companyMapper: CompanyMapper, jwtService: JwtService, userPasswordMapper: UserPasswordMapper);
    protected generateJwt(user: UserEntity): string;
    protected encryptPassword(password: string): Promise<string>;
    protected comparePassword(rawPassword: string, encryptedPassword: string): Promise<boolean>;
    createProfile(params: CreateProfileDto): Promise<{
        token: string;
    }>;
    loginByEmailPassword(email: string, password: string): Promise<{
        token: string;
    }>;
}
