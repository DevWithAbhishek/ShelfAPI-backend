import { PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod/v4';
import { ValidationFailed } from '../errors/errors-class.error';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: unknown) {
    try {
      return this.schema.parse(value);
    } catch {
      throw new ValidationFailed();
    }
  }
}
