import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from '../auth/payload.interface';
import { Tenants } from './entities/tenants.entity';
import { CreateTenants } from './dto/create-tenants';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Tenants)
    private readonly tenantsRepo:Repository<Tenants>,
  ) {}
  async createTenants(createTenants:CreateTenants){
    return this.tenantsRepo.save(createTenants);
  }
  async addUsers(id:number,createUserDto: CreateUserDto){
  createUserDto.tenantId=id;
  createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
  return this.userRepo.save(createUserDto);
  }
  async createAdmin(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    console.log('ahihi')
    return this.userRepo.save(createUserDto);
  }
  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
    return this.userRepo.save(createUserDto);
  }

  findAll(id: number) {
    return this.userRepo.find({ where: { tenantId: id }});
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id: id } });
  }
  findName(name: string) {
    return this.userRepo.findOne({ where: { fullname: name } });
  }
  async login(fullname: string) {
    const user = await this.userRepo.findOne({ where: { fullname: fullname } });
    if (!user)
      throw new HttpException('Email does not exist', HttpStatus.NOT_FOUND);
    return user;
  }
  update(id: number, updateUserDto: UpdateUserDto) {
    if (this.userRepo.findOne({ where: { id: id } })) {
      updateUserDto.id = id;
      console.log(updateUserDto);
      return this.userRepo.save(updateUserDto);
    }
    return `Accout khong ton tai`;
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
  async userExist({ email }: JwtPayload) {
    const user = await this.userRepo.findOne({
      where: { fullname: email },
    });
    if (!user) throw new HttpException('invalidToken', HttpStatus.UNAUTHORIZED);
    return user;
  }
}
