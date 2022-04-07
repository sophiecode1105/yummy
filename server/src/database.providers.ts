import { connect } from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: () =>
      connect(
        `mongodb+srv://bomba:1234@cluster0.c125d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      ),
  },
];
