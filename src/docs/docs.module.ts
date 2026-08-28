import { Module } from '@nestjs/common';
import { DocsController } from './docs.controller';
import { DocsService } from './docs.service';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { S3Client } from '@aws-sdk/client-s3';

@Module({
  controllers: [DocsController],
  providers: [
    DocsService,
    PrismaService,
    JwtService,
    {
      provide: S3Client,
      useFactory: () =>
        new S3Client({
          region: process.env.AWS_REGION,
        }),
    },
  ],
})
export class DocsModule {}
