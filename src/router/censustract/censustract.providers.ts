import { DataSource } from 'typeorm';
import { CensusTract } from '../../database/entities/censustract.entity';
import { Income1901 } from 'src/database/entities/income1901.entity';

export const censustractProvider = [
  {
    provide: 'CENSUSTRACT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CensusTract),
    inject: ['POSTGRES'],
  },
];

export const income1901Provider = [
  {
    provide: 'CENSUSTRACT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Income1901),
    inject: ['POSTGRES'],
  },
];
