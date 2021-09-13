import { Injectable, Inject, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruoles } from './ruoles.entity';
import { Permissions } from 'src/permissions/permissions.entity'


@Injectable()
export class RuolesService {

    constructor(@InjectRepository(Ruoles) private ruolesRepository: Repository<Ruoles>) { }


     async createRuoles(ruole: Ruoles) {
        // await this.ruolesRepository.create(role);
     await this.ruolesRepository.save(
           {
               id: 1,
               name: "superadm"
           },
       );
    await this.ruolesRepository.save(
        {
            id: 2,
            name: "admin"
        },
    );
    await this.ruolesRepository.save(
        {
            id: 3,
            name: "staff"
        },
    );
       
       
    }

    async getRuoles(ruole: Ruoles): Promise<Ruoles[]> {
        return await this.ruolesRepository.find();
    }

    async getruole(_id: number): Promise<Ruoles []> {
        return await this.ruolesRepository.find({
            select: ["name" ],
            where: [{ "id": _id }]
        });
    }
}