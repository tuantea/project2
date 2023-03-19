import { Module } from '@nestjs/common';
import { RightsService } from './rights.service';
import { RightsController } from './rights.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Right } from './entities/right.entity';
import { Role2Rights } from './entities/role2rights.dto';

@Module({
  imports:[TypeOrmModule.forFeature([Right,Role2Rights])],
  controllers: [RightsController],
  providers: [RightsService]
})
export class RightsModule {}
