import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity({ name: 'censustract' })
export class CensusTract {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', { nullable: true })
  statefp: string;
  @Column('text', { nullable: true })
  countyfp: string;
  @Column('text', { nullable: true })
  tractce: string;
  @Column('text', { nullable: true })
  geoidfq: string;
  @Column('text', { nullable: true })
  geoid: string;
  @Column('text', { nullable: true })
  name: string;
  @Column('text', { nullable: true })
  namelsad: string;
  @Column('text', { nullable: true })
  stusps: string;
  @Column('text', { nullable: true })
  namelsadco: string;
  @Column('text', { nullable: true })
  state_name: string;
  @Column('text', { nullable: true })
  lsad: string;
  @Column('bigint', { nullable: true })
  aland: number;
  @Column('bigint', { nullable: true })
  awater: number;
  @Column('geometry', { spatialFeatureType: 'MultiPolygon', srid: 4269 })
  geometry: string;
  @Column('text', { nullable: true })
  state: string;
  @Column('text', { nullable: true })
  year: string;
  @Column('text', { nullable: true })
  censuscode: string;
}
