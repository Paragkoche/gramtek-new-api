import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@/utility/db.utils'

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string

  @Column()
  phone: string

  @Column()
  display_name: string

  @Column()
  status: string

  @Column()
  last_login_at: Date
}
