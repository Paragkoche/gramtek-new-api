import { Module } from '@nestjs/common'
import { GraphqlModule } from './graphql/graphql.module'
import { IamService } from './iam.service'
import { RestModule } from './rest/rest.module'

@Module({
  providers: [IamService],
  imports: [RestModule, GraphqlModule],
})
export class IamModule {}
