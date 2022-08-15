import { Module } from '@nestjs/common';
import { AwsService } from 'src/shared/services/aws.service';
import { SnspublishController } from './controller/snspublish.controller';
import { SnspublishService } from './services/snspublish.service';

@Module({
    controllers: [SnspublishController],
    providers: [SnspublishService,AwsService]
})
export class SnspublishModule {}
