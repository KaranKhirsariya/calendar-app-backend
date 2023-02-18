import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNumberString, IsOptional, Max, Min } from 'class-validator';
export class FindTodoQueryDto {
  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false })
  year: string;

  @Min(0)
  @Max(11)
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @ApiProperty({ required: false })
  month: number;
}
