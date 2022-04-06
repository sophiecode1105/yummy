import { Connection } from 'mongoose';
import { DogSchema } from './schemas/dog.schema';

export const DogProviders = [
  {
    provide: 'DOG_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Dog', DogSchema, 'Dog'),
    inject: ['DATABASE_CONNECTION'],
  },
];
