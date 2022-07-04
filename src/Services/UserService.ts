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

//put
export const updatedUser = async(uid: number, user: Users) => {
    const userRepository = AppDataSource.getRepository(User)
    let userToUpdate = await userRepository.findOneBy({
        id: uid,
    })
    if (userToUpdate) {
        userToUpdate.uname = user.uname;
        userToUpdate.address = user.address;
        await userRepository.save(userToUpdate);
        return Promise.resolve(findUser());
    }
    return Promise.reject();
}

//delete
export const deleteUser = async(uid: number) => {
    const userRepository = AppDataSource.getRepository(User)
    let userToRemove = await userRepository.findOneBy({
        id: uid,
    })
    if(userToRemove)
    await userRepository.remove(userToRemove)
}
