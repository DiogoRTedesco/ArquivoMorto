import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AccessLevel as UserAccessLevel } from '@prisma/client';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  //@SetAccessLevel(UserAccessLevel.ADMIN) // Apenas usuários com nível de acesso ADMIN podem acessar esta rota
  async create(@Body() createUserDto: { username: string, password: string, accessLevel: UserAccessLevel }) {
    return this.usersService.create(createUserDto);
  }

  // Outras rotas...
}
