import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnspublishModule } from './modules/sns-publish/snspublish.module';
import { AwsService } from './shared/services/aws.service';

@Module({
  imports: [SnspublishModule],
  controllers: [AppController],
  providers: [AppService, AwsService],
})
export class AppModule {}
