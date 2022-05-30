import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  //* 필요한거 가져오기,
  @ApiProperty({
    example: '3280199',
    description: 'id',
  })
  id: string;
}
