import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RolesGuard } from './auth/guards/roles.guard';
import { EmployeesModule } from './employees/employees.module';
import { FilesModule } from './files/files.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey', // Configuração do segredo JWT
      signOptions: { expiresIn: '60m' }, // Configuração do tempo de expiração do token
    }),
    ConfigModule.forRoot(),
    FilesModule,
    EmployeesModule, // Importa o módulo de configuração para ler variáveis de ambiente
  ],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
