import { Controller, Get, Param, Post} from '@nestjs/common';
import { PermissionService } from './permissions.service';
import { Permissions } from './permissions.entity';

@Controller('permissions')
export class PermissionsController {

    constructor(private service: PermissionService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getpermissions(params.id);
    }

     @Post()
    create(permissions: Permissions) {
        return this.service.createpermissions(permissions);
    }

    
}
