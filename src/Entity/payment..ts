import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm"
import { Food } from "./food";

@Entity()
export class Payment {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    type: string

    @ManyToOne(() => Food, (food) => food.payments, 
    {eager: true})
    food: Food

}