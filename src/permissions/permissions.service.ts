import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissions } from './permissions.entity';

@Injectable()
export class PermissionService {

    constructor(@InjectRepository(Permissions) private permissionsRepository: Repository<Permissions>) { }


     async createpermissions(permission: Permissions) {
        // await this.permissionsRepository.create(role);
     await this.permissionsRepository.save(
           {
               id: 1,
               name: "create"
           },
       );
    await this.permissionsRepository.save(
        {
            id: 2,
            name: "read"
        },
    );
    await this.permissionsRepository.save(
        {
            id: 3,
            name: "update"
        },
    );
    await this.permissionsRepository.save(
        {
            id: 4,
            name: "delete"
        },
    );
       
       
    }

    async getpermissions(permissions: Permissions): Promise<Permissions[]> {
        return await this.permissionsRepository.find();
    }

    async getrole(_id: number): Promise<Permissions []> {
        return await this.permissionsRepository.find({
            select: ["name" ],
            where: [{ "id": _id }]
        });
    }
}