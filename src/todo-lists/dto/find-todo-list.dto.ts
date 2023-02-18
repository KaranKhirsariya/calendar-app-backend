import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNumberString,
  IsOptional,
  Length,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
export class FindTodoListQueryDto {
  @IsOptional()
  @IsNumberString()
  @MinLength(1)
  @MaxLength(4)
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
