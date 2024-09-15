import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'censustract' })
export class CensusTract {
  @PrimaryColumn('integer')
  id: number;

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
}
