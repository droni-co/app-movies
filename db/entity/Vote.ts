import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'int' })
  userId!: number

  @Column({ type: 'int' })
  movieId!: number

  @Column({ type: 'int' })
  points!: number
    
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined
}