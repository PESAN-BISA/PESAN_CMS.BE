import * as dotenv from 'dotenv';
import { User } from '../../../src/modules/user/entities/user.entity';
import { define } from 'typeorm-seeding';

dotenv.config();

define(User, () => {
  const user = new User();
  user.user_name = 'admin';
  user.role = 'ADMIN';
  user.current_semester = 0;
  user.password = process.env.ADMIN_PASSWORD;
  return user;
});
