import { Test, TestingModule } from '@nestjs/testing';
import { SnspublishService } from './snspublish.service';

describe('SnspublishService', () => {
  let service: SnspublishService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnspublishService],
    }).compile();

    service = module.get<SnspublishService>(SnspublishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
