import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Roles } from 'src/roles/roles.entity'
import { Permissions } from 'src/permissions/permissions.entity'
import { Ruoles } from 'src/ruoles/ruoles.entity'

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository: Repository<User>, 
    @InjectRepository(Roles) private rolesRepository: Repository<Roles>, 
    @InjectRepository(Ruoles) private ruolesRepository: Repository<Ruoles>, 

    @InjectRepository(Permissions) private permissionsRepository: Repository<Permissions>) { }

    async createUser(user: any, ruoles: null, permissions: Permissions) {
        let savedUser = await this.usersRepository.save(user, ruoles);
        // const savedRoles = await this.rolesRepository.find()
    
        // console.log(myRole)
        console.log(user.roles);
        let myRole;
        let rlar = []

        let crtr = await this.permissionsRepository.find({where: {id: 1}});
        let crtst = JSON.stringify(crtr);
        let crt = JSON.parse(crtst);

        let vr = await this.permissionsRepository.find({where: {id: 2}});
        let vwst = JSON.stringify(vr);
        let vw = JSON.parse(vwst);

        let upr = await this.permissionsRepository.find({where: {id: 3}});
        let upstr = JSON.stringify(upr);
        let upd = JSON.parse(upstr);

        let delr = await this.permissionsRepository.find({where: {id: 4}});
        let delstr = JSON.stringify(delr);
        let del = JSON.parse(delstr);

        
    
            // myRole.name = "admin"
            // myRole.id = 2

        for (let index = 0; index < user.roles.length; index++) {
            const element = user.roles[index];
            const findMyrole = await this.ruolesRepository.find(ruoles);
            for(let r = 0; r < findMyrole.length; r++){
                if(element === findMyrole[r].id){
                    let svr = findMyrole[r];
                    // rlar.push(svr)
                    svr.user = [savedUser];
                    // user.roles = rlar;
                    // await this.ruolesRepository.save(svr);
                    myRole = svr
                    if(svr.id === 1)
                    {
                        svr.permissions = [crt[0], vw[0], upd[0]];
                        await this.ruolesRepository.save(svr);

                    }else if(svr.id === 2)
                    {
                        svr.permissions  = [crt[0], vw[0], upd[0]];
                        await this.ruolesRepository.save(svr);

                    }
                    else if(svr.id ===3)
                    {
                        svr.permissions  = [crt[0], vw[0], upd[0], del[0]];
                        await this.ruolesRepository.save(svr);

                    }
                } 
               }
            }
            console.log(myRole);
            // console.log(user.roles);
         
        return savedUser;
    }

    async getUsers(user: User): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<User []> {
        return await this.usersRepository.find({
            select: ["firstname", "secondname" ],
            where: [{ "id": _id }]
        });
    }

    async updateUser(user: User) {
        return this.usersRepository.save(user)
    }

    async deleteUser(user: User) {
        this.usersRepository.delete(user);
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

    // async getpermissions(permissions: Permissions): Promise<Permissions[]> {
    //     return await this.permissionsRepository.find();
    // }

    async getpermissions(_id: number): Promise<Permissions []> {
        return await this.permissionsRepository.find({
            select: ["name" ],
            where: [{ "id": _id }]
        });
    }
}
