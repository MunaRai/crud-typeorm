import { Router, Request, Response } from "express"
import { User } from "../Entity/user";
import { addUser, findUser } from "../Services/UserService";

export const userRouter: Router = Router();

//GET method
userRouter.get('/', async(req: Request, res:Response) => {
    try{
        const getResult = await findUser();
        res.send(getResult);
    } catch(error) {
        res.status(404).send('Error');
    }
});

//POST method
userRouter.post('/', async(req:Request, res:Response) => {
 
    try{
        const getResult = await addUser(req.body)
        res.status(200).json(getResult)
    }catch(error){
        res.json('Error')
    }
});