import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Income1901 } from './income1901.entity';

@Entity({ name: 'censustract' })
export class CensusTract {
  @PrimaryGeneratedColumn()
  id: number;

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

  @OneToOne(() => Income1901, (income1901) => income1901.censustract)
  @JoinColumn()
  income1901: Income1901;
}
