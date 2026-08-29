import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { type Request } from 'express';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { Unauthenticated } from '../common/errors/errors-class.error';

type AuthenticatedRequest = Request & {
  user?: { sub: string; username: string };
};

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getCurrent(@Req() req: AuthenticatedRequest) {
    const userId = req.user?.sub;
    if (!userId) throw new Unauthenticated();
    return this.usersService.getUserById(userId);
  }
}
