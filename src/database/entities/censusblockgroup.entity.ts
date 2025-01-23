import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { SexByAge } from './sexbyage.entity';
import { IncomePerCapita } from './income_per_capita.entity';

@Entity({ name: 'censusblockgroup' })
export class CensusBlockGroup {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', { nullable: true })
  statefp: string;
  @Column('text', { nullable: true })
  countyfp: string;
  @Column('text', { nullable: true })
  tractce: string;
  @Column('text', { nullable: true })
  blkgrpce: string;
  @Column('text', { nullable: true })
  geoidfq: string;
  @Column('text', { nullable: true })
  geoid: string;
  @Column('text', { nullable: true })
  name: string;
  @Column('text', { nullable: true })
  namelsad: string;
  @Column('text', { nullable: true })
  lsad: string;
  @Column('bigint', { nullable: true })
  aland: number;
  @Column('bigint', { nullable: true })
  awater: number;
  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4269, select: false },)
  geometry: string;
  @Column('text', { nullable: true })
  state: string;
  @Column('text', { nullable: true })
  year: string;
  @OneToOne(() => SexByAge)
  @JoinColumn()
  sexbyage: SexByAge;
  @OneToOne(() => IncomePerCapita)
  @JoinColumn()
  incomepercapita: IncomePerCapita;
}
