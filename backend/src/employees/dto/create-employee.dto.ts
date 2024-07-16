import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString({strict:false,strictSeparator: false})
  birthDate: string;

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
  @IsDateString({strict:false,strictSeparator: false})
  admissionDate?: string;

  @IsOptional()
  @IsDateString({strict:false,strictSeparator: false})
  terminationDate?: string;

  @IsOptional()
  @IsString()
  nre?: string;
}
