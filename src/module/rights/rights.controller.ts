import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RightsService } from './rights.service';
import { CreateRightDto } from './dto/create-right.dto';
import { UpdateRightDto } from './dto/update-right.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRoleRightsDto } from './dto/createRoleRights.dto';
@ApiBearerAuth()
@ApiTags('Rights')
@Controller('rights')
export class RightsController {
  constructor(private readonly rightsService: RightsService) {}

  @Post()
  create(@Body() createRightDto: CreateRightDto) {
    return this.rightsService.create(createRightDto);
  }

  @Get()
  findAll() {
    return this.rightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rightsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRightDto: UpdateRightDto) {
    return this.rightsService.update(+id, updateRightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rightsService.remove(+id);
  }
  @Get('/getrole/:id')
  getRole(@Param('id') id: string) {
    return this.rightsService.getRole(+id);
  }
  @Post('/add/role')
  addRole(@Body() userRoleDto: CreateRoleRightsDto) {
    return this.rightsService.addRole(userRoleDto);
  }
  @Delete('/:userId/:roleId')
  removeRole(@Param('userId') userId: string,@Param('roleId') roleId: string) {
    return this.rightsService.deleteRole(+userId,+roleId);
  }
}
