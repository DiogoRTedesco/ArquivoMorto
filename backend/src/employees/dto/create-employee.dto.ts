import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDate()
  birthDate: Date;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  pis?: string;

  @IsOptional()
  @IsString()
  ctps?: string;

  @IsOptional()
  @IsDate()
  admissionDate?: Date;

  @IsOptional()
  @IsDate()
  terminationDate?: Date;

  @IsOptional()
  @IsString()
  nre?: string;
}
