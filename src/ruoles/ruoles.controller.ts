import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { RuolesService } from './ruoles.service';
import { Ruoles } from './ruoles.entity';

@Controller('ruoles')
export class RuolesController {

    constructor(private service: RuolesService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRuoles(params.id);
    }
    @Post()
        createrls(ruoles: Ruoles){
            return this.service.createRuoles(ruoles)
        }
    

//    @Post() 
//    create(@Body() roles: Roles) {
//         return this.service.createroles(roles)
//     }

    
}