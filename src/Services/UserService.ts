import { AppDataSource } from "../app"
import { Users } from "../Contracts/Users";
import { User } from "../Entity/user"

//get
export const findUser = () => {
    return Promise.resolve(AppDataSource.manager.find(User));
}

//post
export const addUser = (newUser: User) => {
    AppDataSource.manager.insert(User, newUser);
    return Promise.resolve(findUser());
}