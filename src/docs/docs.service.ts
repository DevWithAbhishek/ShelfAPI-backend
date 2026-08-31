import { Injectable } from '@nestjs/common';
import {
  addDocumentDto,
  updateDocumentDto,
} from '../common/schemas/schema.zod';
import { PrismaService } from '../prisma.service';
import { FileMissing } from '../common/errors/errors-class.error';
import { randomUUID } from 'crypto';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

type UploadAttachmentInput = {
  userId: string;
  docId: string;
  file: Express.Multer.File;
};

@Injectable()
export class DocsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3: S3Client,
  ) {}
  async findAllDocuments(
    userId: string,
    { q, filter, sort, page = 1, limit = 10 }: {
      q?: string; filter?: string; sort?: string; page?: number; limit?: number;
    } = {},
  ) {
    const [field, direction] = (sort ?? 'created_at desc').toLowerCase().split(' ');
    const orderByField = field === 'date' ? 'created_at' : field;

    const where = {
      user_id: userId,
      ...(q && { title: { contains: q, mode: 'insensitive' as const } }),
      ...(filter && { tags: { some: { tag: { name: filter } } } }),
    };

    const [docs, total] = await Promise.all([
      this.prisma.document.findMany({
        where,
        include: { tags: { include: { tag: true } } },
        orderBy: { [orderByField]: direction === 'asc' ? 'asc' : 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.document.count({ where }),
    ]);

    return { docs, meta: { total, page, limit, hasNextPage: page * limit < total } };
  }

  async addDocument(addDocumentDto: addDocumentDto, userId: string) {
    await this.prisma.document.create({
      data: {
        title: addDocumentDto.title,
        description: addDocumentDto.description,
        user_id: userId,
        tags: {
          create: addDocumentDto.tags?.map((name) => ({
            tag: {
              connectOrCreate: {
                where: {
                  user_id_name: {
                    user_id: userId,
                    name,
                  },
                },
                create: {
                  user_id: userId,
                  name,
                },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async deleteAllDocs(userId: string) {
    await this.prisma.document.deleteMany({
      where: { user_id: userId },
    });
  }

  async getOneDocument(docId: string, userId: string) {
    return this.prisma.document.findFirst({
      where: { id: docId, user_id: userId },
    });
  }

  async updateOneDoc(docId: string, userId: string, data: updateDocumentDto) {
    const doc = await this.prisma.document.findFirst({
      where: { id: docId, user_id: userId },
    });
    if (!doc) throw new FileMissing();

    return this.prisma.document.update({
      where: { id: docId },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.description !== undefined && {
          description: data.description,
        }),
        ...(data.tags !== undefined && {
          tags: {
            deleteMany: {},
            create: data.tags.map((tagName) => ({
              tag: {
                connectOrCreate: {
                  where: {
                    user_id_name: {
                      user_id: userId,
                      name: tagName,
                    },
                  },
                  create: {
                    user_id: userId,
                    name: tagName,
                  },
                },
              },
            })),
          },
        }),
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  }

  async deleteOneDoc(docId: string, userId: string) {
    const doc = await this.prisma.document.findFirst({
      where: { id: docId, user_id: userId },
    });
    if (!doc) throw new FileMissing();
    await this.prisma.document.delete({ where: { id: docId } });
  }

  async uploadAttachment({ userId, docId, file }: UploadAttachmentInput) {
    const doc = await this.prisma.document.findFirst({
      where: { id: docId, user_id: userId },
    });

    if (!doc) throw new FileMissing();

    const ext = file.originalname.includes('.')
      ? file.originalname.split('.').pop()
      : 'bin';

    const key = `users/${userId}/docs/${docId}/${randomUUID()}.${ext}`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    return this.prisma.attachment.create({
      data: {
        doc_id: docId,
        s3_key: key,
        folder: '/uploads',
        original_filename: file.originalname,
        mime_type: file.mimetype,
        size_bytes: file.size,
      },
    });
  }
}
