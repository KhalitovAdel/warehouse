export interface IJwtCreate {
  sub: number;
  companyId: number;
}

export interface IJwtData extends IJwtCreate {
  iat: number;
  exp: number;
}
