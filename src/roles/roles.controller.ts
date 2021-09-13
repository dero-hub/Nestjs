import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { RolesService } from './roles.service';
import { Roles } from './roles.entity';

@Controller('roles')
export class RolesController {

    constructor(private service: RolesService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getroles(params.id);
    }
    @Post()
        createrls(roles: Roles){
            return this.service.createroles(roles)
        }
    

//    @Post() 
//    create(@Body() roles: Roles) {
//         return this.service.createroles(roles)
//     }

    
}