import { Roles } from 'src/roles/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';

@Entity()
export class Permissions {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;


//    @ ManyToMany(() => Roles)
//    @JoinTable()
//    roles: Roles[];


}