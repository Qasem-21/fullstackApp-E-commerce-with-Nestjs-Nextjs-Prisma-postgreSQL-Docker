// Data transfer object DTO for user registration

import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'user email address',
    example: 'ali.2@gmail.com',
  })
  @IsEmail({}, { message: 'please provide a valid email' })
  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @ApiProperty({
    description: 'user password',
    example: 'StrongP@ssw0rd!',
  })
  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  @MinLength(8, { message: 'password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, {
    message:
      'password must contain at least one uppercase letter, one lowercase letter, one number and on special character',
  })
  password: string;

  @ApiProperty({
    description: 'user first name',
    example: 'Ali',
    required: false,
  })
  @IsOptional()
  @IsString()
  firstName?: string;

  @ApiProperty({
    description: 'user last name',
    example: 'Mohammadi',
    required: false,
  })
  @IsOptional()
  @IsString()
  lastName?: string;
}
