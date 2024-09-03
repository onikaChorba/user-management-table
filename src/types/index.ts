export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
}

export interface IUsers {
  users: IUser[];
}
