import { Role } from "../../roles/entities/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Right } from "./right.entity";

@Entity({name:'role2rights'})
export class Role2Rights {
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
  
    @ManyToOne(() => Right)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    right: Right;
}