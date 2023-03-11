interface Igeo {
  lat: string;
  lng: string;
}

interface Iaddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Igeo;
}

interface Icompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Iaddress;
  phone: string;
  website: string;
  company: Icompany;
};

export interface UserTableProps {
  users: UserType[] | null;
}
