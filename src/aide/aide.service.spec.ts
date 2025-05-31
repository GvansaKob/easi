import { Test, TestingModule } from '@nestjs/testing';
import { AideService } from './aide.service';

describe('AideService', () => {
  let service: AideService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AideService],
    }).compile();

    service = module.get<AideService>(AideService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
