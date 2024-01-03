import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'int' })
  userId!: number

  @Column({ type: 'int' })
  movieId!: number
  
  @Column({ type: 'varchar', length: 150 })
  name!: string

  @Column({ type: 'varchar' })
  video?: string

  @Column({ type: 'varchar' })
  source?: string

  @Column({ type: 'tinyint' })
  active?: boolean
  
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined
}