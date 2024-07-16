import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.createEmployee(createEmployeeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateEmployee(@Param('id') id: number, @Body() data: Prisma.EmployeeUpdateInput) {
    return this.employeesService.updateEmployee(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllEmployees() {
    return this.employeesService.getAllEmployees();
  }

  @UseGuards(JwtAuthGuard)
  @Post('search')
  async getEmployeeByName(@Body('name') name: string) {
    return this.employeesService.getEmployeeByName(name);
    }
    

  // Adicione outros endpoints conforme necessário
}
