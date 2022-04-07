import { Connection } from 'mongoose';
import { OwnerSchema } from './schemas/owner.schema';
export const ownerProviders = [
  {
    provide: 'OWNER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Owner', OwnerSchema, 'Owner'),
    inject: ['DATABASE_CONNECTION'],
  },
];
``;
