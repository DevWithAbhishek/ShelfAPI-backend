// src/docs/docs.service.spec.ts — needs PrismaService and S3Client
import { Test, TestingModule } from '@nestjs/testing';
import { DocsService } from './docs.service';
import { PrismaService } from '../prisma.service';
import { S3Client } from '@aws-sdk/client-s3';

describe('DocsService', () => {
  let service: DocsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DocsService,
        { provide: PrismaService, useValue: {} },
        { provide: S3Client, useValue: {} },
      ],
    }).compile();
    service = module.get<DocsService>(DocsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});