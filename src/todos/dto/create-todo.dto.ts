import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @ApiProperty({ type: String })
  title: string;

  @IsString()
  @ApiPropertyOptional({ type: String })
  description: string;

  @IsUUID()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  listId: string;

  @IsDateString()
  @IsOptional()
  @ApiPropertyOptional({ type: String })
  dueDate: string;
}
