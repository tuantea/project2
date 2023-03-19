import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRoleDto } from './create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    id:number;
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    isEnabled :number;
}
