import { BaseEntity, Column, Entity, Index } from 'typeorm'
import { genScope, Perform, Scope } from '../utility/scope.iam.utility'

@Entity()
@Index('idx_roles_name_scope', ['name', 'scope'], { unique: true })
export class Role extends BaseEntity {
  @Column({
    unique: true,
  })
  name: string

  @Column({
    default: genScope(Scope.Self, Perform.All),
    unique: true,
  })
  scope: string
}
