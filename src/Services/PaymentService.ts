import { AppDataSource } from "../app"
import { Payment } from "../Entity/payment."

//get
export const findPayment = () => {
    return Promise.resolve(AppDataSource.manager.find(Payment));
}

//post
export const addPayment = async (newPayment: Payment) => {
    await AppDataSource.manager.insert(Payment, newPayment);
    return Promise.resolve(findPayment());
}

//put
export const updatedPayment = async (pid: number, payment: Payment) => {
    const userRepository = AppDataSource.getRepository(Payment)
    let paymentToUpdate = await userRepository.findOneBy({
        id: pid,
    })
    if (paymentToUpdate) {
        paymentToUpdate.type = payment.type;
        await userRepository.save(paymentToUpdate);
        return Promise.resolve(findPayment());
    }
    return Promise.reject();
}

//delete
export const deletePayment = async(uid: number) => {
    const userRepository = AppDataSource.getRepository(Payment)
    let paymentToRemove = await userRepository.findOneBy({
        id: uid,
    })
    if(paymentToRemove)
    await userRepository.remove(paymentToRemove)
}