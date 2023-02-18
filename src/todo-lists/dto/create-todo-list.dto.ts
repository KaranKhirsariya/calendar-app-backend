import { ApiProperty } from '@nestjs/swagger';
import { IsDateString } from 'class-validator';
export class CreateTodoListDto {
  @IsDateString()
  @ApiProperty({ type: String })
  dueDate: string;
}
