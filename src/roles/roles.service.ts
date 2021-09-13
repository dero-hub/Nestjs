import { Injectable, Inject, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './roles.entity';
import { Permissions } from 'src/permissions/permissions.entity'


@Injectable()
export class RolesService {

    constructor(@InjectRepository(Roles) private rolesRepository: Repository<Roles>) { }


     async createroles(role: Roles) {
        // await this.rolesRepository.create(role);
     await this.rolesRepository.save(
           {
               id: 1,
               name: "superadm"
           },
       );
    await this.rolesRepository.save(
        {
            id: 2,
            name: "admin"
        },
    );
    await this.rolesRepository.save(
        {
            id: 3,
            name: "staff"
        },
    );
       
       
    }

    async getroles(role: Roles): Promise<Roles[]> {
        return await this.rolesRepository.find();
    }

    async getrole(_id: number): Promise<Roles []> {
        return await this.rolesRepository.find({
            select: ["name" ],
            where: [{ "id": _id }]
        });
    }

    // async setPrms(role: Roles ,permissions: Permissions) {
        // let rol = await this.rolesRepository.save(role);
        // let prm = await this.permissionsRepository.save(permissions);

        // let rolAr = await this.rolesRepository.find({where: {id: })
        //  const prmAr = await this.permissionsRepository.find(permissions)

        // for(let r = 0; r < rolAr.length; r++){
        //  for(let p =0; p < prmAr.length; p++ ){

        //  }
// 
        // }

    }
// }

    //     async deleterole(role: Roles) {
//         this.rolesRepository.delete(role);
//     }
// }
