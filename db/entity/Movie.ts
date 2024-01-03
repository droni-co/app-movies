import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'int' })
  userId!: number
  
  @Column({ type: 'varchar', length: 150 })
  name!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  slug?: string

  @Column({ type: 'int' })
  year?: string

  @Column({ type: 'text' })
  description?: string

  @Column({ type: 'text' })
  sinopsis?: string

  @Column({ type: 'varchar' })
  poster?: string

  @Column({ type: 'varchar' })
  banner?: string

  @Column({ type: 'varchar' })
  card?: string

  @Column({ type: 'varchar' })
  trailer?: string

  @Column({ type: 'varchar' })
  country?: string

  @Column({ type: 'varchar' })
  language?: string

  @Column({ type: 'varchar' })
  genders?: string

  @Column({ type: 'int' })
  duration?: string

  @Column({ type: 'varchar' })
  tags?: string

  @Column({ type: 'tinyint' })
  active?: boolean

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined
}