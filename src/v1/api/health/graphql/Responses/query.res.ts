import { Field, ObjectType } from '@nestjs/graphql'
import { createResponseType } from '@/utility/gql.utils'

@ObjectType()
export class HealthData {
  @Field()
  status: string
}

export const Health = createResponseType(HealthData, 'Health')
