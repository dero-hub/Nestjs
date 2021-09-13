import { Test, TestingModule } from '@nestjs/testing';
import { RuolesController } from './ruoles.controller';

describe('RuolesController', () => {
  let controller: RuolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuolesController],
    }).compile();

    controller = module.get<RuolesController>(RuolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
