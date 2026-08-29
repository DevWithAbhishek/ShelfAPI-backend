import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Used by AuthService during login/signup — looks up by email,
  // the field the user actually submits. Returns the full row
  // (including hashed_password) since AuthService needs it to verify.
  async getUser(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  // Used by "get current user" (GET /api/users/me) — looks up by the
  // ID stored in the JWT (`sub`), and never exposes hashed_password.
  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, username: true, created_at: true },
    });
  }
}
