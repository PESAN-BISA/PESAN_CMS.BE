import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { AuthGuard } from 'src/utils/auth.guard';

@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
