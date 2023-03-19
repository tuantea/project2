import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User2Roles } from "./User2Roles.entity";
@Entity({name:'roles'})
export class Role {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    tenantId:number;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    isEnabled:number;
    @OneToMany(() => User2Roles, (list) => list.role)
    listRecipe: User2Roles[];
}
