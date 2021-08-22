import { CreateProfileDto } from '../dto/auth.dto';

export const DEFAULT_PASSWORD = 'Qwerty123';

export const createProfile: CreateProfileDto = Object.freeze({
  user: {
    firstName: 'Adel',
    lastName: 'Khalitov',
    middleName: 'Marsovich',
    email: 'adelkhalitov1@gmail.com',
    password: DEFAULT_PASSWORD,
  },
  company: {
    name: 'Test company',
  },
});
