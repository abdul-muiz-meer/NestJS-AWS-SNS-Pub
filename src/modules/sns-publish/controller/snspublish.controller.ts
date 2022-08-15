import { Controller, Post } from '@nestjs/common';
import { SnspublishService } from '../services/snspublish.service';

@Controller('snspublish')
export class SnspublishController {
  constructor(private readonly SnspublishService: SnspublishService) {}

  @Post('publish-message')
  async publishMessage() {
    return await this.SnspublishService.publishToSNS();
  }
}
