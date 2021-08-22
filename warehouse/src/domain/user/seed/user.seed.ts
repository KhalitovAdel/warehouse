import { CreateUserDto } from '../dto/user.dto';

let emailNumber = 1;

export const createUser = (email?: string) => {
  emailNumber++;
  const toCreate: Pick<CreateUserDto, 'firstName' | 'lastName' | 'middleName' | 'email'> = {
    firstName: 'TestName',
    lastName: 'TestLastName',
    middleName: 'TestMiddleName',
    email: email || `testEmail${emailNumber}@gmail.com`,
  };

  return toCreate;
};
