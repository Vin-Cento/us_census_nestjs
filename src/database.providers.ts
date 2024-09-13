import { DataSource } from 'typeorm';


export const databaseProviders = [
  {
    provide: 'POSTGRES',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 25432,
        username: 'user',
        password: 'password',
        database: 'db',
        // entities: [
        //   __dirname + '/../**/*.entity{.ts,.js}',
        // ],
        entities: [
          // './*.entity{.ts,.js}',
          // './entities/*.entity{.ts,.js}',
          __dirname + '/**/*.entity{.ts,.js}'
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
