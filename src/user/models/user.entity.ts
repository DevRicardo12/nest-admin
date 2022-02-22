import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../../role/models/role.entity';

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique:true})
    email: string

    @Column()
    @Exclude()
    password: string

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(()=> Role)
    @JoinColumn({ name: 'role_id'})
    role: Role
}