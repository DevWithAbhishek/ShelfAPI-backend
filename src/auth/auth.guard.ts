import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Unauthenticated } from '../common/errors/errors-class.error';
import { Request } from 'express';

type AuthenticatedRequest = Request & {
  user?: { sub: string; username: string };
};

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token = request.cookies.shelf_access as string | undefined;

    if (!token) throw new Unauthenticated();
    try {
      const payload = await this.jwtService.verifyAsync<{
        sub: string;
        username: string;
      }>(token, {
        secret: process.env.JWT_SECRET,
      });
      request.user = payload;
    } catch {
      throw new Unauthenticated();
    }
    return true;
  }
}
