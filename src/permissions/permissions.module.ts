import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Permissions} from './permissions.entity'
import { PermissionsController } from  './permissions.controller';
import { PermissionService } from './permissions.service';


@Module({
  imports: [TypeOrmModule.forFeature([Permissions])],
  providers: [PermissionService],
  controllers: [PermissionsController]
})
export class PermissionsModule {}
