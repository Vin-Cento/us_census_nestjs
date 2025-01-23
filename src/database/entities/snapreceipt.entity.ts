import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'snap_receipt' })
export class SnapReceipt {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', { nullable: true, name: 'GEO_ID' })
  GEO_ID: string;
  @Column('text', { nullable: true, name: 'NAME' })
  NAME: string;
  @Column('bigint', { nullable: true })
  B22010_001E: number;
  @Column('bigint', { nullable: true })
  B22010_001M: number;
  @Column('bigint', { nullable: true })
  B22010_002E: number;
  @Column('bigint', { nullable: true })
  B22010_002M: number;
  @Column('bigint', { nullable: true })
  B22010_003E: number;
  @Column('bigint', { nullable: true })
  B22010_003M: number;
  @Column('bigint', { nullable: true })
  B22010_004E: number;
  @Column('bigint', { nullable: true })
  B22010_004M: number;
  @Column('bigint', { nullable: true })
  B22010_005E: number;
  @Column('bigint', { nullable: true })
  B22010_005M: number;
  @Column('bigint', { nullable: true })
  B22010_006E: number;
  @Column('bigint', { nullable: true })
  B22010_006M: number;
  @Column('bigint', { nullable: true })
  B22010_007E: number;
  @Column('bigint', { nullable: true })
  B22010_007M: number;
  @Column('text', { nullable: true })
  year: string;
  @Column('text', { nullable: true })
  geoid: string;
}
