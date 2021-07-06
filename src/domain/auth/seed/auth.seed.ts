import { CreateProfileDto } from '../dto/auth.dto';

export const createProfile: CreateProfileDto = Object.freeze({
  user: {
    firstName: 'Adel',
    lastName: 'Khalitov',
    middleName: 'Marsovich',
    email: 'adelkhalitov1@gmail.com',
    password: 'Qwerty123',
  },
  company: {
    name: 'Test company',
  },
});
