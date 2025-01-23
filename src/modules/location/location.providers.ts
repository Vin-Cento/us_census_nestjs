import { DataSource } from 'typeorm';
import { City } from 'src/database/entities/city.entity';

export const cityProvider = [
  {
    provide: 'CITY_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(City),
    inject: ['POSTGRES'],
  },
];
