import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Role{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}