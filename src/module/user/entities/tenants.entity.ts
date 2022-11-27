import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'tenants'})
export class Tenants{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

}