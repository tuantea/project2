import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRightDto } from './create-right.dto';

export class UpdateRightDto extends PartialType(CreateRightDto) {
    id:number;
    @ApiProperty()
    name:string;
    @ApiProperty()
    description:string;
    @ApiProperty()
    isEnabled:number;
}
