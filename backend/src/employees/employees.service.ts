import { Injectable } from '@nestjs/common';
import { Employee, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) { }

  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const {
      name,
      birthDate,
      cpf,
      pis,
      ctps,
      admissionDate,
      terminationDate,
      nre,
    } = createEmployeeDto;
    return this.prisma.employee.create({
      data: {
        name,
        birthDate: new Date(birthDate),
        cpf,
        pis,
        ctps,
        admissionDate: admissionDate ? new Date(admissionDate) : null,
        terminationDate: terminationDate ? new Date(terminationDate) : null,
        nre,
      }
    });
  }

  async updateEmployee(id: number, data: Prisma.EmployeeUpdateInput): Promise<Employee> {
    return this.prisma.employee.update({
      where: { id },
      data,
    });
  }

  async getAllEmployees(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }

  async getEmployeeByName(name: string): Promise<Employee[]> {
    //return this.prisma.employee.findMany({where:{name: name}})
    return this.prisma.employee.findMany({
      where: {
        name: {
          contains:name ,
          mode: 'insensitive'
          
        }
      },
      include:{
        files:{
          select:{fileName: true}
        }
      }
    })
  }
  // Adicione outros métodos conforme necessário
}
