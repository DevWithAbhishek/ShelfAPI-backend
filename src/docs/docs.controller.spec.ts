// src/docs/docs.controller.spec.ts — AuthGuard needs JwtService, since it's applied to this controller
import { Test, TestingModule } from '@nestjs/testing';
import { DocsController } from './docs.controller';
import { DocsService } from './docs.service';
import { JwtService } from '@nestjs/jwt';

describe('DocsController', () => {
  let controller: DocsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocsController],
      providers: [
        { provide: DocsService, useValue: {} },
        { provide: JwtService, useValue: {} },
      ],
    }).compile();
    controller = module.get<DocsController>(DocsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});