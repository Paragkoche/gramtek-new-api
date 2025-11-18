import { Module } from '@nestjs/common'
import { GraphqlModule } from './graphql/graphql.module'
import { RestModule } from './rest/rest.module'

@Module({
  imports: [RestModule, GraphqlModule],
})
export class HealthModule {}
