import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('rights')
export class Right {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    description:string;
    @Column()
    isEnabled:number;
}
