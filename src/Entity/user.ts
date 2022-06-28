import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Food } from "./food"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    uname: string

    @Column("text")
    address: string

    @OneToOne(() => Food, food => food.user, {eager: true}) 
    @JoinColumn()
    food: Food;

    // @ManyToOne(() => Food, food => food.user, {onDelete: 'SET NULL'})
    // foods: Food;

}