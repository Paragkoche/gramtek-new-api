import { Injectable } from '@nestjs/common'
import os from 'os'
import { STATUS } from '@/static/status.static'
import { generateApiResponse } from '@/utility/rest-api.utils'
@Injectable()
export class HealthService {
  cpuUses() {
    return os.cpus().map((cpu) => cpu.times)
  }
  systemHealth() {
    return generateApiResponse(
      {
        cpuUsage: this.cpuUses(),
      },
      'Health check',
      200,
      STATUS.Success,
    )
  }
}
