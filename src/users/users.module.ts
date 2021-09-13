import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
// import { RolesService } from 'src/roles/roles.service';
// import { PermissionService } from 'src/permissions/permissions.service';

import { UsersController } from './users.controller';
import { User } from './user.entity';
import { Roles } from 'src/roles/roles.entity';
import { Permissions } from 'src/permissions/permissions.entity';
import { Ruoles } from 'src/ruoles/ruoles.entity';
// import { RolesController } from 'src/roles/roles.controller';
// import { PermissionsController } from 'src/permissions/permissions.controller';



@Module({
  imports: [TypeOrmModule.forFeature([User, Roles, Permissions, Ruoles])],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UsersModule { }