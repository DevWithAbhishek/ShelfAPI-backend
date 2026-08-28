import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

@Controller('api/health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  async checkHealth() {
    return await this.healthService.check();
  }
}
