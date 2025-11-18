import { Controller, Get } from '@nestjs/common'
import { HealthService } from '../health.service'

@Controller('health')
export class RestController {
  constructor(private readonly healthService: HealthService) {}
  @Get()
  health() {
    return this.healthService.systemHealth()
  }
}
