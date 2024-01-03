import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email?: string

  @Column({ type: 'varchar', length: 255 })
  image?: string

  @Column({ type: 'varchar', length: 20, default: 'user' })
  role?: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date | undefined

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date | undefined
}