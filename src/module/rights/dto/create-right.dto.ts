import { ApiProperty } from "@nestjs/swagger";

export class CreateRightDto {
@ApiProperty()
name:string;
@ApiProperty()
description:string;
@ApiProperty()
isEnabled:number;
}
