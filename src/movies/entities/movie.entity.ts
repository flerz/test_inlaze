import {
  BeforeInsert,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  title: string;
  @Column('text')
  image: string;
  @Column('text')
  description: string;
  @Column('numeric')
  ranking?: number;
  @Column('text')
  language: string;
  @Column('text')
  genres?: string[];
  @Column('text')
  critic?: string;
  @DeleteDateColumn({
    select: false,
  })
  deleteAt?: string;
  @Column({
    type: 'numeric',
    insert: true,
    array: true,
  })
  rank_votes: number[];

  @BeforeInsert()
  rankVotes() {
    this.rank_votes = [this.ranking];
  }
}
