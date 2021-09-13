import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"; 
import { Permissions } from 'src/permissions/permissions.entity';
import { User } from "src/users/user.entity";

@Entity()
export class Ruoles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @ManyToMany(() => User)
    @JoinTable({name: "user_roles"})
    user: User[];

    @ ManyToMany(() => Permissions)
    @JoinTable({name: "roles_permissions"})
    permissions: Permissions[];
}