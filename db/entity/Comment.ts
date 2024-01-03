import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'int' })
  userId!: number

  @Column({ type: 'int' })
  movieId!: number

  @Column({ type: 'int' })
  parentId!: number
  
  @Column({ type: 'text' })
  comment!: string

  @Column({ type: 'tinyint' })
  active?: boolean
  
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined
}