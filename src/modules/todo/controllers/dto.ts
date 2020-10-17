import { ApiProperty } from '@nestjs/swagger';

export class CreateDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  position: number;
  @ApiProperty({
    required: false
  })
  isCompleted?: boolean;
}

export class UpdateDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  position: number;
  @ApiProperty({
    required: false
  })
  isCompleted?: boolean;
}
