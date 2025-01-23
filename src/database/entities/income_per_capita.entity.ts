import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'income_per_capita' })
export class IncomePerCapita {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', { nullable: true })
  GEO_ID: string;
  @Column('text', { nullable: true })
  NAME: string;
  @Column('bigint', { nullable: true })
  B19301_001E: number;
  @Column('bigint', { nullable: true })
  B19301_001M: number;
  @Column('text', { nullable: true })
  year: string;
  @Column('text', { nullable: true })
  geoid: string;
}
