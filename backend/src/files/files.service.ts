import { Injectable } from '@nestjs/common';
import { File, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  async uploadFile(data: Prisma.FileCreateInput): Promise<File> {
    return this.prisma.file.create({ data });
  }

  async getFilesByEmployee(employeeId: number): Promise<File[]> {
    return this.prisma.file.findMany({ where: { employeeId } });
  }

  // Adicione outros métodos conforme necessário
}
