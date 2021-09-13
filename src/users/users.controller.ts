import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Ruoles } from 'src/ruoles/ruoles.entity';
import { RuolesService } from 'src/ruoles/ruoles.service';
import { Permissions } from 'src/permissions/permissions.entity';


@Controller('users')
export class UsersController {

    constructor(private service:  UsersService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);

    }
    @Get()
    getall(user: User){
        return this.service.getUsers(user)
    }

    @Post()
    create(@Body() user: User, ruoles: null, permissions: null) {
        return this.service.createUser(user, ruoles, permissions);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }


}