import { Router, Request, Response } from "express"
import { User } from "../Entity/user";
import { addUser, deleteUser, findUser, updatedUser } from "../Services/UserService";


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
userRouter.post('/users', async(req:Request, res:Response) => {
 
    try{
        const getResult = await addUser(req.body)
        res.status(200).json(getResult)
    }catch(error){
        res.json('Error')
    }
});

//PUT method
userRouter.put('/:id', async(req:Request, res:Response) => {
    let id:number = Number(req.params.id)
    
    try{
        const getResult = await updatedUser(id, req.body);
        console.log(getResult);
        res.status(200).json(getResult);
    }catch(error){
        res.json(error)
    }
})

//DELETE method
userRouter.delete('/:id', async(req: Request, res: Response) => {
    let id:number = Number(req.params.id);
    const getResult = await deleteUser(id);
    res.status(200).json(getResult);
})