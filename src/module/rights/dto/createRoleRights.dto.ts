import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleRightsDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    roleId: number;

    @ApiProperty()
    name :string;
}