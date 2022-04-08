import { Connection } from 'mongoose';
import { UserSchema } from './schemas/user.shcema';

export const userProvider = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('USER', UserSchema, 'USER'),
    inject: ['DATABASE_CONNECTION'],
  },
];
``;
