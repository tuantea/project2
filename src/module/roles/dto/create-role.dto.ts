import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    tenantId:number;
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    isEnabled :number;
}
