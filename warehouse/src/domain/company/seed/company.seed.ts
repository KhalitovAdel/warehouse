import { CreateCompanyDto } from '../dto/company.dto';

let createCompanyCounter = 0;

export const createCompany = (): CreateCompanyDto => {
  createCompanyCounter++;
  const toCreate: CreateCompanyDto = {
    name: `Test company - ${createCompanyCounter}`,
  };

  return toCreate;
};
