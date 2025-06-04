import * as bcrypt from 'bcrypt';
import { setSeederFactory } from 'typeorm-extension';
import { UserEntity } from '../../../src/database/entities';

export const UserFactory = setSeederFactory(UserEntity, async () => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash('password', salt);

  const user = new UserEntity();
  user.name = 'admin';
  user.email = 'admin@mail.com';
  user.password = hashedPassword;

  return user;
});
