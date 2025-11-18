import { Query, Resolver } from '@nestjs/graphql'
import { HealthService } from '../health.service'
import { Health } from './Responses/query.res'
@Resolver()
export class GraphqlResolver {
  constructor(private readonly healthService: HealthService) {}
  @Query(() => Health)
  health() {
    return this.healthService.systemHealth()
  }
}
