import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LogService {
    constructor(private prisma: PrismaService) {}

    async createLog (userId: number, action: string){
        await this.prisma.log.create({
            data:{
                userId: userId,
                action: action,
            }
        })
    }
}

