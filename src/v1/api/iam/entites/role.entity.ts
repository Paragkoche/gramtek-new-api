import { BaseEntity, Column, Entity, Index } from 'typeorm'

@Entity()
@Index('idx_roles_name_scope', ['name', 'scope'], { unique: true })
export class Role extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string

  @Column({
    default: 'SELF',
    unique: true,
  })
  scope: string
}
