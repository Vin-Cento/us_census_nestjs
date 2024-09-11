import { DataSource } from 'typeorm';
import { CensusTract } from './censustract.entity';

export const censustractProvider = [
  {
    provide: 'CENSUSTRACT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CensusTract),
    inject: ['DATA_SOURCE'],
  },
];
