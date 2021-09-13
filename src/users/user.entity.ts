import { Roles } from 'src/roles/roles.entity';
import { Ruoles } from 'src/ruoles/ruoles.entity';
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"; 

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname:string;

    @Column() 
    secondname:string;

    // @ManyToMany(() => Ruoles)
    // @JoinTable({name: "user_roles"})
    // roles: Ruoles[];
}
