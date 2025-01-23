import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';
import { CensusTract } from './censustract.entity';

@Entity({ name: 'income' })
export class Income {
  @PrimaryColumn('integer')
  id: number;

  @Column('text', { nullable: true })
  GEO_ID: string;

  @Column('integer', { nullable: true })
  B19001_001E: number;

  @Column('integer', { nullable: true })
  B19001_001M: number;

  @Column('integer', { nullable: true })
  B19001_002E: number;

  @Column('integer', { nullable: true })
  B19001_002M: number;

  @Column('integer', { nullable: true })
  B19001_003E: number;

  @Column('integer', { nullable: true })
  B19001_003M: number;

  @Column('integer', { nullable: true })
  B19001_004E: number;

  @Column('integer', { nullable: true })
  B19001_004M: number;

  @Column('integer', { nullable: true })
  B19001_005E: number;

  @Column('integer', { nullable: true })
  B19001_005M: number;

  @Column('integer', { nullable: true })
  B19001_006E: number;

  @Column('integer', { nullable: true })
  B19001_006M: number;

  @Column('integer', { nullable: true })
  B19001_007E: number;

  @Column('integer', { nullable: true })
  B19001_007M: number;

  @Column('integer', { nullable: true })
  B19001_008E: number;

  @Column('integer', { nullable: true })
  B19001_008M: number;

  @Column('integer', { nullable: true })
  B19001_009E: number;

  @Column('integer', { nullable: true })
  B19001_009M: number;

  @Column('integer', { nullable: true })
  B19001_010E: number;

  @Column('integer', { nullable: true })
  B19001_010M: number;

  @Column('integer', { nullable: true })
  B19001_011E: number;

  @Column('integer', { nullable: true })
  B19001_011M: number;

  @Column('integer', { nullable: true })
  B19001_012E: number;

  @Column('integer', { nullable: true })
  B19001_012M: number;

  @Column('integer', { nullable: true })
  B19001_013E: number;

  @Column('integer', { nullable: true })
  B19001_013M: number;

  @Column('integer', { nullable: true })
  B19001_014E: number;

  @Column('integer', { nullable: true })
  B19001_014M: number;

  @Column('integer', { nullable: true })
  B19001_015E: number;

  @Column('integer', { nullable: true })
  B19001_015M: number;

  @Column('integer', { nullable: true })
  B19001_016E: number;

  @Column('integer', { nullable: true })
  B19001_016M: number;

  @Column('integer', { nullable: true })
  B19001_017E: number;

  @Column('integer', { nullable: true })
  B19001_017M: number;

  @Column('money', { nullable: true })
  B19301_001E: number;

  @Column('money', { nullable: true })
  B19301_001M: number;

  // @OneToOne(() => CensusTract, (censustract) => censustract.income)
  // censustract: CensusTract;
}
