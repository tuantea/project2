import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
@Entity({name:'user2roles'})
export class User2Roles {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    userId:number;
    @Column()
    roleId:number;
    @Column()
    name:string;
    @ManyToOne(() => Role)
    @JoinColumn({ name: 'roleId', referencedColumnName: 'id' })
    role: Role;
  
    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    rawmaterial: User;
}