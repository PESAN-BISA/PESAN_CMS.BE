import { MockType } from 'src/utils/types';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export const repositoryMockUserFactory: () => MockType<Repository<User>> =
  jest.fn(() => ({
    findOne: jest.fn((entity) => entity),
  }));
