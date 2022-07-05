import { Router, Request, Response } from "express";
import { addPayment, deletePayment, findPayment, updatedPayment } from "../Services/PaymentService";

export const paymentRouter: Router = Router();

//GET
paymentRouter.get('/pay', async(req: Request, res:Response) => {
    try{
        const Result = await findPayment();
        res.send(Result);
    } catch(error) {
        res.status(404).send('Error');
    }
})

//POST
paymentRouter.post('/payment', async(req:Request, res:Response) => {
    try{
        const Result = await addPayment(req.body)
        res.status(200).json(Result)
    }catch(error){
        res.json('Error')
    }
})

//PUT
paymentRouter.put('/:id', async(req:Request, res:Response) => {
    let id:number = Number(req.params.id)
    
    try{
        const Result = await updatedPayment(id, req.body);
        console.log(Result);
        res.status(200).json(Result);
    }catch(error){
        res.json(error)
    }
})

//DELETE
paymentRouter.delete('/:id', async(req: Request, res: Response) => {
    let id:number = Number(req.params.id);
    const getResult = await deletePayment(id);
    res.status(200).json(getResult);
})