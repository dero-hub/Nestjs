import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { RuolesModule } from './ruoles/ruoles.module';
import cors from 'cors'
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    RolesModule,
    PermissionsModule,
    RuolesModule,
   
  ],
})
export class AppModule {}