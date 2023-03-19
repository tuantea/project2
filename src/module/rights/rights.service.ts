import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRightDto } from './dto/create-right.dto';
import { CreateRoleRightsDto } from './dto/createRoleRights.dto';
import { UpdateRightDto } from './dto/update-right.dto';
import { Right } from './entities/right.entity';
import { Role2Rights } from './entities/role2rights.dto';

@Injectable()
export class RightsService {
  constructor(
    @InjectRepository(Right)
    private readonly repoRights:Repository<Right>,
    @InjectRepository(Role2Rights)
    private readonly rolerightRepo:Repository<Role2Rights>,
  ){}
  create(createRightDto: CreateRightDto) {
    return this.repoRights.save(createRightDto);
  }

  findAll() {
    return `This action returns all rights`;
  }

  findOne(id: number) {
    return this.repoRights.findOne({where:{id:id}});
  }

  async update(id: number, updateRightDto: UpdateRightDto) {
    const right=await this.findOne(id);
    if (right!==null) {
      updateRightDto.id = id;
      return this.repoRights.save(updateRightDto);
    }
    return `Right khong ton tai`;
  }

  remove(id: number) {
    return this.repoRights.delete(id);
  }
  async getRole(userId: number) {
    const roleright= await this.rolerightRepo.findOne({where:{userId:userId}});
    if(roleright!==null){
      const role=await this.rolerightRepo.findOne({where:{id:roleright.roleId}})
      return role;
    }
  else    
  return 'khong ton tai role';
  };

  addRole (roleRight:CreateRoleRightsDto) {
    return this.rolerightRepo.save(roleRight);
  }
  async deleteRole(userId: number,roleId:number) {
    const roleright= await this.rolerightRepo.findOne({ where:[{userId : userId},{roleId : roleId}]});

    return this.rolerightRepo.delete(roleright.id);
  }
}
