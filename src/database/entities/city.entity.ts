import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity({ name: 'city' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  city: string;

  @Column('text')
  city_ascii: string;

  @Column('text')
  state_id: string;

  @Column('text')
  state_name: string;

  @Column('text', { nullable: true })
  county_fips: string;

  @Column('text')
  county_name: string;

  @Column('double precision')
  lat: number;

  @Column('double precision')
  lng: number;

  @Column('bigint')
  population: number;

  @Column('double precision')
  density: number;

  @Column('text')
  source: string;

  @Column('boolean')
  military: boolean;

  @Column('boolean')
  incorporated: boolean;

  @Column('text')
  timezone: string;

  @Column('bigint')
  ranking: number;

  @Column('geometry', { spatialFeatureType: 'Point', srid: 4269 })
  coor: string;

  @Column('simple-array', { nullable: true })
  zips: string[];
}
