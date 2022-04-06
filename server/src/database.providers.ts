import * as mongoose from 'mongoose';
import { DogSchema } from './dog/schemas/dog.schema';

const DATABASE_NAME = 'GraphQL';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`),
  },
];
