import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { User2Roles } from './entities/User2Roles.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Role,User2Roles])],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
