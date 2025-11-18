import { Module } from '@nestjs/common'
import { HealthService } from '../health.service'
import { GraphqlResolver } from './graphql.resolver'

@Module({
  providers: [GraphqlResolver, HealthService],
})
export class GraphqlModule {}
