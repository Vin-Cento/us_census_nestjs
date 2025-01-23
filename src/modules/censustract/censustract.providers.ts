import { DataSource } from 'typeorm';
import { CensusTract } from '../../database/entities/censustract.entity';
import { City } from 'src/database/entities/city.entity';
import { Income } from 'src/database/entities/income.entity';
import { Rent } from 'src/database/entities/rent.entity';

export const censustractProvider = [
  {
    provide: 'CENSUSTRACT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CensusTract),
    inject: ['POSTGRES'],
  },
  {
    provide: 'CITY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(City),
    inject: ['POSTGRES'],
  },
  {
    provide: 'INCOME_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Income),
    inject: ['POSTGRES'],
  },
  {
    provide: 'RENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Rent),
    inject: ['POSTGRES'],
  },
];
