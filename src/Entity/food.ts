import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    category: string

}