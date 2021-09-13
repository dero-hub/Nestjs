import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"; 
import { Permissions } from 'src/permissions/permissions.entity';
import { User } from "src/users/user.entity";

@Entity()
export class Roles {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;
    
    
    // @ ManyToMany(() => Permissions)
    // @JoinTable()
    // permissions: Permissions[];
}