import { Module } from '@nestjs/common'
import { HealthService } from '../health.service'
import { RestController } from './rest.controller'

@Module({
  controllers: [RestController],
  providers: [HealthService],
})
export class RestModule {}
