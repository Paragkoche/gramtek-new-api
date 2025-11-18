import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@/utility/db.utils'

@Entity()
export class Permission extends BaseEntity {
  @Column({ nullable: false })
  code: string

  @Column({ nullable: true })
  description: string
}
