import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'sex_by_age' })
export class SexByAge {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('bigint', { nullable: true, name: 'B01001_001E' })
  total_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_001M' })
  total_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_002E' })
  total_male_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_002M' })
  total_male_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_003E' })
  male_under_5_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_003M' })
  male_under_5_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_004E' })
  male_5_to_9_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_004M' })
  male_5_to_9_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_005E' })
  male_10_to_14_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_005M' })
  male_10_to_14_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_006E' })
  male_15_to_17_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_006M' })
  male_15_to_17_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_007E' })
  male_18_to_19_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_007M' })
  male_18_to_19_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_008E' })
  male_20_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_008M' })
  male_20_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_009E' })
  male_21_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_009M' })
  male_21_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_010E' })
  male_22_to_24_est: number;
  @Column('bigint', { nullable: true, name: 'B01001_010M' })
  male_22_to_24_margin: number;
  @Column('bigint', { nullable: true, name: 'B01001_011E' })
  B01001_011E: number;
  @Column('bigint', { nullable: true, name: 'B01001_011M' })
  B01001_011M: number;
  @Column('bigint', { nullable: true, name: 'B01001_012E' })
  B01001_012E: number;
  @Column('bigint', { nullable: true, name: 'B01001_012M' })
  B01001_012M: number;
  @Column('bigint', { nullable: true, name: 'B01001_013E' })
  B01001_013E: number;
  @Column('bigint', { nullable: true, name: 'B01001_013M' })
  B01001_013M: number;
  @Column('bigint', { nullable: true, name: 'B01001_014E' })
  B01001_014E: number;
  @Column('bigint', { nullable: true, name: 'B01001_014M' })
  B01001_014M: number;
  @Column('bigint', { nullable: true, name: 'B01001_015E' })
  B01001_015E: number;
  @Column('bigint', { nullable: true, name: 'B01001_015M' })
  B01001_015M: number;
  @Column('bigint', { nullable: true, name: 'B01001_016E' })
  B01001_016E: number;
  @Column('bigint', { nullable: true, name: 'B01001_016M' })
  B01001_016M: number;
  @Column('bigint', { nullable: true, name: 'B01001_017E' })
  B01001_017E: number;
  @Column('bigint', { nullable: true, name: 'B01001_017M' })
  B01001_017M: number;
  @Column('bigint', { nullable: true, name: 'B01001_018E' })
  B01001_018E: number;
  @Column('bigint', { nullable: true, name: 'B01001_018M' })
  B01001_018M: number;
  @Column('bigint', { nullable: true, name: 'B01001_019E' })
  B01001_019E: number;
  @Column('bigint', { nullable: true, name: 'B01001_019M' })
  B01001_019M: number;
  @Column('bigint', { nullable: true, name: 'B01001_020E' })
  B01001_020E: number;
  @Column('bigint', { nullable: true, name: 'B01001_020M' })
  B01001_020M: number;
  @Column('bigint', { nullable: true, name: 'B01001_021E' })
  B01001_021E: number;
  @Column('bigint', { nullable: true, name: 'B01001_021M' })
  B01001_021M: number;
  @Column('bigint', { nullable: true, name: 'B01001_022E' })
  B01001_022E: number;
  @Column('bigint', { nullable: true, name: 'B01001_022M' })
  B01001_022M: number;
  @Column('bigint', { nullable: true, name: 'B01001_023E' })
  B01001_023E: number;
  @Column('bigint', { nullable: true, name: 'B01001_023M' })
  B01001_023M: number;
  @Column('bigint', { nullable: true, name: 'B01001_024E' })
  B01001_024E: number;
  @Column('bigint', { nullable: true, name: 'B01001_024M' })
  B01001_024M: number;
  @Column('bigint', { nullable: true, name: 'B01001_025E' })
  B01001_025E: number;
  @Column('bigint', { nullable: true, name: 'B01001_025M' })
  B01001_025M: number;
  @Column('bigint', { nullable: true, name: 'B01001_026E' })
  B01001_026E: number;
  @Column('bigint', { nullable: true, name: 'B01001_026M' })
  B01001_026M: number;
  @Column('bigint', { nullable: true, name: 'B01001_027E' })
  B01001_027E: number;
  @Column('bigint', { nullable: true, name: 'B01001_027M' })
  B01001_027M: number;
  @Column('bigint', { nullable: true, name: 'B01001_028E' })
  B01001_028E: number;
  @Column('bigint', { nullable: true, name: 'B01001_028M' })
  B01001_028M: number;
  @Column('bigint', { nullable: true, name: 'B01001_029E' })
  B01001_029E: number;
  @Column('bigint', { nullable: true, name: 'B01001_029M' })
  B01001_029M: number;
  @Column('bigint', { nullable: true, name: 'B01001_030E' })
  B01001_030E: number;
  @Column('bigint', { nullable: true, name: 'B01001_030M' })
  B01001_030M: number;
  @Column('bigint', { nullable: true, name: 'B01001_031E' })
  B01001_031E: number;
  @Column('bigint', { nullable: true, name: 'B01001_031M' })
  B01001_031M: number;
  @Column('bigint', { nullable: true, name: 'B01001_032E' })
  B01001_032E: number;
  @Column('bigint', { nullable: true, name: 'B01001_032M' })
  B01001_032M: number;
  @Column('bigint', { nullable: true, name: 'B01001_033E' })
  B01001_033E: number;
  @Column('bigint', { nullable: true, name: 'B01001_033M' })
  B01001_033M: number;
  @Column('bigint', { nullable: true, name: 'B01001_034E' })
  B01001_034E: number;
  @Column('bigint', { nullable: true, name: 'B01001_034M' })
  B01001_034M: number;
  @Column('bigint', { nullable: true, name: 'B01001_035E' })
  B01001_035E: number;
  @Column('bigint', { nullable: true, name: 'B01001_035M' })
  B01001_035M: number;
  @Column('bigint', { nullable: true, name: 'B01001_036E' })
  B01001_036E: number;
  @Column('bigint', { nullable: true, name: 'B01001_036M' })
  B01001_036M: number;
  @Column('bigint', { nullable: true, name: 'B01001_037E' })
  B01001_037E: number;
  @Column('bigint', { nullable: true, name: 'B01001_037M' })
  B01001_037M: number;
  @Column('bigint', { nullable: true, name: 'B01001_038E' })
  B01001_038E: number;
  @Column('bigint', { nullable: true, name: 'B01001_038M' })
  B01001_038M: number;
  @Column('bigint', { nullable: true, name: 'B01001_039E' })
  B01001_039E: number;
  @Column('bigint', { nullable: true, name: 'B01001_039M' })
  B01001_039M: number;
  @Column('bigint', { nullable: true, name: 'B01001_040E' })
  B01001_040E: number;
  @Column('bigint', { nullable: true, name: 'B01001_040M' })
  B01001_040M: number;
  @Column('bigint', { nullable: true, name: 'B01001_041E' })
  B01001_041E: number;
  @Column('bigint', { nullable: true, name: 'B01001_041M' })
  B01001_041M: number;
  @Column('bigint', { nullable: true, name: 'B01001_042E' })
  B01001_042E: number;
  @Column('bigint', { nullable: true, name: 'B01001_042M' })
  B01001_042M: number;
  @Column('bigint', { nullable: true, name: 'B01001_043E' })
  B01001_043E: number;
  @Column('bigint', { nullable: true, name: 'B01001_043M' })
  B01001_043M: number;
  @Column('bigint', { nullable: true, name: 'B01001_044E' })
  B01001_044E: number;
  @Column('bigint', { nullable: true, name: 'B01001_044M' })
  B01001_044M: number;
  @Column('bigint', { nullable: true, name: 'B01001_045E' })
  B01001_045E: number;
  @Column('bigint', { nullable: true, name: 'B01001_045M' })
  B01001_045M: number;
  @Column('bigint', { nullable: true, name: 'B01001_046E' })
  B01001_046E: number;
  @Column('bigint', { nullable: true, name: 'B01001_046M' })
  B01001_046M: number;
  @Column('bigint', { nullable: true, name: 'B01001_047E' })
  B01001_047E: number;
  @Column('bigint', { nullable: true, name: 'B01001_047M' })
  B01001_047M: number;
  @Column('bigint', { nullable: true, name: 'B01001_048E' })
  B01001_048E: number;
  @Column('bigint', { nullable: true, name: 'B01001_048M' })
  B01001_048M: number;
  @Column('bigint', { nullable: true, name: 'B01001_049E' })
  B01001_049E: number;
  @Column('bigint', { nullable: true, name: 'B01001_049M' })
  B01001_049M: number;
  @Column('text', { nullable: true, name: 'geoid' })
  geoid: string;
  @Column('text', { nullable: true })
  year: string;
  @Column('text', { nullable: true , name: 'NAME'})
  NAME: string;
  @Column('text', { nullable: true, name: 'GEO_ID' })
  GEO_ID: string;
}
