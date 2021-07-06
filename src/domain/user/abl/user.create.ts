import { ObjectUtil } from '../../../utils/object.util';
import { CreateUserDto } from '../dto/user.dto';

export class UserCreate implements Record<keyof Required<CreateUserDto>, unknown>, CreateUserDto {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  companyId: number;

  constructor(protected readonly user: CreateUserDto) {
    this.init();
  }

  init() {
    const { email, ...other } = this.user;
    this.email = email.toLowerCase();
    ObjectUtil.merge(this, other);
  }
}
