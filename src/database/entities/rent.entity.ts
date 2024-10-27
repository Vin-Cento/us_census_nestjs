import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { CensusTract } from './censustract.entity';

@Entity({ name: 'rent' })
export class Rent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  GEO_ID: string;

  @Column('integer', { nullable: true })
  B25056_001E: number;
  @Column('integer', { nullable: true })
  B25056_001M: number;
  @Column('integer', { nullable: true })
  B25056_002E: number;
  @Column('integer', { nullable: true })
  B25056_002M: number;
  @Column('integer', { nullable: true })
  B25056_003E: number;
  @Column('integer', { nullable: true })
  B25056_003M: number;
  @Column('integer', { nullable: true })
  B25056_004E: number;
  @Column('integer', { nullable: true })
  B25056_004M: number;
  @Column('integer', { nullable: true })
  B25056_005E: number;
  @Column('integer', { nullable: true })
  B25056_005M: number;
  @Column('integer', { nullable: true })
  B25056_006E: number;
  @Column('integer', { nullable: true })
  B25056_006M: number;
  @Column('integer', { nullable: true })
  B25056_007E: number;
  @Column('integer', { nullable: true })
  B25056_007M: number;
  @Column('integer', { nullable: true })
  B25056_008E: number;
  @Column('integer', { nullable: true })
  B25056_008M: number;
  @Column('integer', { nullable: true })
  B25056_009E: number;
  @Column('integer', { nullable: true })
  B25056_009M: number;
  @Column('integer', { nullable: true })
  B25056_010E: number;
  @Column('integer', { nullable: true })
  B25056_010M: number;
  @Column('integer', { nullable: true })
  B25056_011E: number;
  @Column('integer', { nullable: true })
  B25056_011M: number;
  @Column('integer', { nullable: true })
  B25056_012E: number;
  @Column('integer', { nullable: true })
  B25056_012M: number;
  @Column('integer', { nullable: true })
  B25056_013E: number;
  @Column('integer', { nullable: true })
  B25056_013M: number;
  @Column('integer', { nullable: true })
  B25056_014E: number;
  @Column('integer', { nullable: true })
  B25056_014M: number;
  @Column('integer', { nullable: true })
  B25056_015E: number;
  @Column('integer', { nullable: true })
  B25056_015M: number;
  @Column('integer', { nullable: true })
  B25056_016E: number;
  @Column('integer', { nullable: true })
  B25056_016M: number;
  @Column('integer', { nullable: true })
  B25056_017E: number;
  @Column('integer', { nullable: true })
  B25056_017M: number;
  @Column('integer', { nullable: true })
  B25056_018E: number;
  @Column('integer', { nullable: true })
  B25056_018M: number;
  @Column('integer', { nullable: true })
  B25056_019E: number;
  @Column('integer', { nullable: true })
  B25056_019M: number;
  @Column('integer', { nullable: true })
  B25056_020E: number;
  @Column('integer', { nullable: true })
  B25056_020M: number;
  @Column('integer', { nullable: true })
  B25056_021E: number;
  @Column('integer', { nullable: true })
  B25056_021M: number;
  @Column('integer', { nullable: true })
  B25056_022E: number;
  @Column('integer', { nullable: true })
  B25056_022M: number;
  @Column('integer', { nullable: true })
  B25056_023E: number;
  @Column('integer', { nullable: true })
  B25056_023M: number;
  @Column('integer', { nullable: true })
  B25056_024E: number;
  @Column('integer', { nullable: true })
  B25056_024M: number;
  @Column('integer', { nullable: true })
  B25056_025E: number;
  @Column('integer', { nullable: true })
  B25056_025M: number;
  @Column('integer', { nullable: true })
  B25056_026E: number;
  @Column('integer', { nullable: true })
  B25056_026M: number;
  @Column('integer', { nullable: true })
  B25056_027E: number;
  @Column('integer', { nullable: true })
  B25056_027M: number;

  @Column('integer', { nullable: true })
  B25057_001E: number;
  @Column('integer', { nullable: true })
  B25057_001M: number;

  @Column('integer', { nullable: true })
  B25058_001E: number;
  @Column('integer', { nullable: true })
  B25058_001M: number;

  @Column('integer', { nullable: true })
  B25059_001E: number;
  @Column('integer', { nullable: true })
  B25059_001M: number;

  @Column('integer', { nullable: true })
  B25060_001E: number;
  @Column('integer', { nullable: true })
  B25060_001M: number;

  @Column('integer', { nullable: true })
  B25061_001E: number;
  @Column('integer', { nullable: true })
  B25061_001M: number;
  @Column('integer', { nullable: true })
  B25061_002E: number;
  @Column('integer', { nullable: true })
  B25061_002M: number;
  @Column('integer', { nullable: true })
  B25061_003E: number;
  @Column('integer', { nullable: true })
  B25061_003M: number;
  @Column('integer', { nullable: true })
  B25061_004E: number;
  @Column('integer', { nullable: true })
  B25061_004M: number;
  @Column('integer', { nullable: true })
  B25061_005E: number;
  @Column('integer', { nullable: true })
  B25061_005M: number;
  @Column('integer', { nullable: true })
  B25061_006E: number;
  @Column('integer', { nullable: true })
  B25061_006M: number;
  @Column('integer', { nullable: true })
  B25061_007E: number;
  @Column('integer', { nullable: true })
  B25061_007M: number;
  @Column('integer', { nullable: true })
  B25061_008E: number;
  @Column('integer', { nullable: true })
  B25061_008M: number;
  @Column('integer', { nullable: true })
  B25061_009E: number;
  @Column('integer', { nullable: true })
  B25061_009M: number;
  @Column('integer', { nullable: true })
  B25061_010E: number;
  @Column('integer', { nullable: true })
  B25061_010M: number;
  @Column('integer', { nullable: true })
  B25061_011E: number;
  @Column('integer', { nullable: true })
  B25061_011M: number;
  @Column('integer', { nullable: true })
  B25061_012E: number;
  @Column('integer', { nullable: true })
  B25061_012M: number;
  @Column('integer', { nullable: true })
  B25061_013E: number;
  @Column('integer', { nullable: true })
  B25061_013M: number;
  @Column('integer', { nullable: true })
  B25061_014E: number;
  @Column('integer', { nullable: true })
  B25061_014M: number;
  @Column('integer', { nullable: true })
  B25061_015E: number;
  @Column('integer', { nullable: true })
  B25061_015M: number;
  @Column('integer', { nullable: true })
  B25061_016E: number;
  @Column('integer', { nullable: true })
  B25061_016M: number;
  @Column('integer', { nullable: true })
  B25061_017E: number;
  @Column('integer', { nullable: true })
  B25061_017M: number;
  @Column('integer', { nullable: true })
  B25061_018E: number;
  @Column('integer', { nullable: true })
  B25061_018M: number;
  @Column('integer', { nullable: true })
  B25061_019E: number;
  @Column('integer', { nullable: true })
  B25061_019M: number;
  @Column('integer', { nullable: true })
  B25061_020E: number;
  @Column('integer', { nullable: true })
  B25061_020M: number;
  @Column('integer', { nullable: true })
  B25061_021E: number;
  @Column('integer', { nullable: true })
  B25061_021M: number;
  @Column('integer', { nullable: true })
  B25061_022E: number;
  @Column('integer', { nullable: true })
  B25061_022M: number;
  @Column('integer', { nullable: true })
  B25061_023E: number;
  @Column('integer', { nullable: true })
  B25061_023M: number;
  @Column('integer', { nullable: true })
  B25061_024E: number;
  @Column('integer', { nullable: true })
  B25061_024M: number;
  @Column('integer', { nullable: true })
  B25061_025E: number;
  @Column('integer', { nullable: true })
  B25061_025M: number;

  @OneToOne(() => CensusTract, (censustract) => censustract.rent)
  @JoinColumn()
  censustract: CensusTract;
}
