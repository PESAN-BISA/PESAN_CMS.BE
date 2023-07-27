import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/utils/auth.guard';
import { UserService } from '../services/user.service';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
