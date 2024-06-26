import { SetMetadata } from '@nestjs/common';
import { AccessLevel as UserAccessLevel } from '@prisma/client';

export const SetAccessLevel = (level: UserAccessLevel) => SetMetadata('accessLevel', level);
