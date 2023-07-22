import { Injectable } from '@nestjs/common';
import { UserType } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly users: UserType[] = [
    {
      id: 1,
      username: 'fikrialwan',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<UserType | undefined> {
    return this.users.find((user: UserType) => user.username === username);
  }

  async findAll(): Promise<UserType[]> {
    return this.users;
  }
}
