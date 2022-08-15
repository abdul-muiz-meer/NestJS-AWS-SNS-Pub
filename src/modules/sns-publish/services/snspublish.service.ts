import { MessageAttributeValue, PublishCommand } from '@aws-sdk/client-sns';
import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/shared/services/aws.service';

@Injectable()
export class SnspublishService {
  constructor(private readonly AwsService: AwsService) {}

  async publishToSNS() {
    let publishMessage = new PublishCommand({
      Message: 'OTP Generation Notification',
      TopicArn: 'SNS-TOPIC-ARN',
      Subject: 'Send OTP',
      MessageAttributes: {
        email: {
          DataType: 'String',
          StringValue: 'my-email@example-domain.com',
        },
        otp: { DataType: 'String', StringValue: '123456' },
      },
    });

    return await this.AwsService.sns.send(publishMessage);
  }
}
