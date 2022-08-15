import { Test, TestingModule } from '@nestjs/testing';
import { SnspublishController } from './snspublish.controller';

describe('SnspublishController', () => {
  let controller: SnspublishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnspublishController],
    }).compile();

    controller = module.get<SnspublishController>(SnspublishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
