import { Test, TestingModule } from '@nestjs/testing';
import { RuolesService } from './ruoles.service';

describe('RuolesService', () => {
  let service: RuolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RuolesService],
    }).compile();

    service = module.get<RuolesService>(RuolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
