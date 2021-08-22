import { AuthService } from './auth.service';
import { CreateProfileDto } from './dto/auth.dto';
export declare class AuthController {
    protected readonly service: AuthService;
    constructor(service: AuthService, request: any);
    protected getLoginPasswordFromBasic(token: string): {
        email: string;
        password: string;
    };
    createUserByEmailAndPassword(body: CreateProfileDto): Promise<{
        token: string;
    }>;
    loginUserByEmailAndPassword(auth: string): Promise<{
        token: string;
    }>;
}
