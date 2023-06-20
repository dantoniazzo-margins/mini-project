export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: Company;
}

export interface Company {
  name: string;
  catchphrase: string;
  bs: string;
}
