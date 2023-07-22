import { User } from '../../../src/modules/user/entities/user.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class UserCreateSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)().create();
  }
}
