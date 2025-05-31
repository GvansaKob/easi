import { Test, TestingModule } from '@nestjs/testing';
import { AideController } from './aide.controller';
import { AideService } from './aide.service';

describe('AideController', () => {
  let controller: AideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AideController],
      providers: [AideService],
    }).compile();

    controller = module.get<AideController>(AideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
