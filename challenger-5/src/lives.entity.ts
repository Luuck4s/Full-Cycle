import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lives {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}