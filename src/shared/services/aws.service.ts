import { Injectable } from '@nestjs/common';
import { SNSClient } from '@aws-sdk/client-sns';

@Injectable()
export class AwsService {
  private readonly accessKeyID = 'AWS_ACCESS_KEY';
  private readonly secretAccessKey = 'AWS_SECRET_KEY';
  private readonly region = 'AWS_REGION';

  get sns(): SNSClient {
    return new SNSClient({
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyID,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }
}
