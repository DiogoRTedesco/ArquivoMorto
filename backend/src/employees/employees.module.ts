import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  providers: [EmployeesService, PrismaService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
