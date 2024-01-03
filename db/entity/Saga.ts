import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Saga {
  @PrimaryGeneratedColumn()
  id?: number
  
  @Column({ type: 'varchar', length: 150 })
  name!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  slug?: string

  @Column({ type: 'varchar' })
  poster?: string

  @Column({ type: 'varchar' })
  banner?: string

  @Column({ type: 'varchar' })
  card?: string

  @Column({ type: 'varchar' })
  tags?: string
  
  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined
}