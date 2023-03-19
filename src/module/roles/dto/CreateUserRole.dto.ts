import { ApiProperty } from '@nestjs/swagger';

export class CreatUserRoleDto {
    @ApiProperty()
    userId: number;

    @ApiProperty()
    roleId: number;

    @ApiProperty()
    name :string;
}
