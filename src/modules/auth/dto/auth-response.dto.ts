// DTO for auth response

import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class AuthResponseDto {
  @ApiProperty({
    description: 'access token for authentication',
    example: 'ac34123caadfa',
  })
  accessToken: string;

  @ApiProperty({
    description: 'refresh token for obtaining new access token',
    example: 'ac34123caadfa',
  })
  refreshToken: string;

  @ApiProperty({
    description: 'Authentication user information',
    example: {
      id: 'user-123',
      email: '<EMAIl>',
      firstName: 'Ali',
      lastName: 'Mohammadi',
      role: 'USER',
    },
  })
  user: {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    role: Role;
  };
}
