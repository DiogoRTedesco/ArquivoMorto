import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AccessLevel as UserAccessLevel } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredAccessLevel = this.reflector.get<UserAccessLevel>('accessLevel', context.getHandler());
    if (!requiredAccessLevel) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return user.accessLevel >= requiredAccessLevel;
  }
}
