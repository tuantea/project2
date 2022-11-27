import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  tenantId : number;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  password: string;
  
  @ApiProperty()
  code: string;

  @ApiProperty()
  note:string;
   
  @ApiProperty()
  isEnabled:number;
}
