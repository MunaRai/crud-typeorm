import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Payment } from "./payment."
import { User } from "./user"

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    foodname: string

    @Column("text")
    category: string

    @OneToOne(() => User, user => user.food, {onDelete: 'CASCADE'})
    user: User

    @OneToMany(() => Payment, (payment) => payment.food)
    payments: Payment[]

    // @ManyToMany(() => User, (user) => user.food)
    // @JoinTable()
    // mtmuser: User[];
}