import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { CreatUserRoleDto } from './dto/CreateUserRole.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { User2Roles } from './entities/User2Roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepo:Repository<Role>,
    @InjectRepository(User2Roles)
    private readonly roleuserRepo:Repository<User2Roles>,)
  {}
  create(id:number,createRoleDto: CreateRoleDto) {
    createRoleDto.tenantId =id;
    return this.roleRepo.save(createRoleDto) ;
  }

  findAll(id:number) {
    return this.roleRepo.find({where:{tenantId:id}});
  }

  findOne(id: number) {
    return this.roleRepo.findOne({where:{id:id}});
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role=await this.findOne(id);
    if (role!==null) {
      updateRoleDto.id = id;
      return this.roleRepo.save(updateRoleDto);
    }
    return `Role khong ton tai`;
  }

  remove(id: number) {
    return this.roleRepo.delete(id);
  }

  async getRole(userId: number) {
    const userrole= await this.roleuserRepo.findOne({where:{userId:userId}});
    if(userrole!==null){
      const role=await this.roleRepo.findOne({where:{id:userrole.roleId}})
      return role;
    }
  else    
  return 'khong ton tai role';
  };

  addRole (userRole:CreatUserRoleDto) {
    return this.roleuserRepo.save(userRole);
  }
  async deleteRole(userId: number,roleId:number) {
    const role= await this.roleuserRepo.findOne({ where:[{userId : userId},{roleId : roleId}]});

    return this.roleuserRepo.delete(role.id);
  }
}
