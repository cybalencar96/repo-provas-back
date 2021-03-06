import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('files')
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    size: number;

    @Column()
    key: string;
}