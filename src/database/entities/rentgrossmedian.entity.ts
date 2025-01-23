import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rent_gross_median' })
export class RentGrossMedian {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', { nullable: true, name: 'GEO_ID' })
  GEO_ID: string;
  @Column('text', { nullable: true, name: 'NAME' })
  NAME: string;
  @Column('double precision', { nullable: true, name: 'B25064_001E' })
  estimate: string;
  @Column('double precision', { nullable: true, name: 'B25064_001M' })
  margin: string;
  @Column('text', { nullable: true })
  year: string;
  @Column('text', { nullable: true })
  geoid: string;
}
