import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreatUserRoleDto } from './dto/CreateUserRole.dto';
@ApiBearerAuth()
@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post(':id')
  create(@Param('id') id:number,@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(id,createRoleDto);
  }

  @Get('/all/:id')
  findAll(@Param('id') id: string) {
    return this.rolesService.findAll(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(+id);
  }
  @Get('/getrole/:id')
  getRole(@Param('id') id: string) {
    return this.rolesService.getRole(+id);
  }
  @Post('/add/role')
  addRole(@Body() userRoleDto: CreatUserRoleDto) {
    return this.rolesService.addRole(userRoleDto);
  }
  @Delete('/:userId/:roleId')
  removeRole(@Param('userId') userId: string,@Param('roleId') roleId: string) {
    return this.rolesService.deleteRole(+userId,+roleId);
  }
}
