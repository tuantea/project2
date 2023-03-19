import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/public.decorator';
import { CreateTenants } from './dto/create-tenants';
@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Public()
  @Post('/tenants')
  createTenants(@Body() createTenants: CreateTenants) {
    return this.userService.createTenants(createTenants);
  }
  @Public()
  @Post('/user/:id')
  addUsers(@Param('id') id: number,@Body() createUserDto: CreateUserDto) {
    return this.userService.addUsers(id,createUserDto);
  }

  @Get('/all/:id')
  findAll(@Param('id') id: number) {
    return this.userService.findAll(id);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
