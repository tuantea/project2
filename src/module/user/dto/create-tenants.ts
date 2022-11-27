import { ApiProperty } from "@nestjs/swagger";

export class CreateTenants{
    @ApiProperty()
    name:string;

}