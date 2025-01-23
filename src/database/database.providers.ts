import { DataSource } from 'typeorm';
import { City } from 'src/database/entities/city.entity';
import { CensusBlockGroup } from './entities/censusblockgroup.entity';

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
          __dirname + '/**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];

export const censusblockgroupProvider = [
  {
    provide: 'CENSUSBLOCKGROUP_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CensusBlockGroup),
    inject: ['POSTGRES'],
  },
];

export const cityProvider = [
  {
    provide: 'CITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(City),
    inject: ['POSTGRES'],
  },
];
