import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.register(userData);
  }
}
