import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tenantId: number;

  @Column()
  fullname: string;

  @Column()
  password: string;
  
  @Column()
  code:string;

  @Column()
  note:string;

  @Column()
  isEnabled:number;

}
