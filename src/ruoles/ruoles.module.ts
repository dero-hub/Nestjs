import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ruoles } from './ruoles.entity';
import { RuolesController } from './ruoles.controller';
import { RuolesService } from './ruoles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ruoles])],

  controllers: [RuolesController],
  providers: [RuolesService]
})
export class RuolesModule {}
