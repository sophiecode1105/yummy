import { connect } from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () => connect(`mongodb://localhost/GraphQL`),
  },
];
