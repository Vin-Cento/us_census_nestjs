import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'censustract' })
export class CensusTract {
  @PrimaryColumn('integer')
  id: number;

  @Column('text')
  censuscode: string;
}
