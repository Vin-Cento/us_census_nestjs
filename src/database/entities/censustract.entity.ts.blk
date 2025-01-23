import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Income } from './income.entity';
import { Rent } from './rent.entity';

@Entity({ name: 'censustract' })
export class CensusTract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  year: number;

  @Column('text', { nullable: true })
  county: string;

  @Column('text')
  censuscode: string;

  @Column('text')
  statefp: string;

  @Column('text')
  countyfp: string;

  @Column('text')
  tractce: string;

  @Column('text')
  blkgrpce: string;

  @Column('text')
  affgeoid: string;

  @Column('text')
  geoid: string;

  @Column('text')
  lsad: string;

  @Column('bigint')
  aland: number;

  @Column('bigint')
  awater: number;

  @Column('text')
  state: string;

  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4269 })
  geometry: string;

  @OneToOne(() => Income, (income) => income.censustract)
  @JoinColumn()
  income: Income;

  @OneToOne(() => Rent, (rent) => rent.censustract)
  @JoinColumn()
  rent: Rent;
}
