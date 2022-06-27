import { AppDataSource } from "../app";
import { Items } from "../Contracts/Items";
import { NewItems } from "../Contracts/newItems";
// import { dataItems } from "../Data/dataList";
import { Food } from "../Entity/food";

//for get method
export const findAll = () => {
    return Promise.resolve(AppDataSource.manager.find(Food));
    // return Promise.resolve(dataItems);
}

//get by id
export const findById = async (fid: number) => {
    const foodRepository = AppDataSource.getRepository(Food)
    return await foodRepository.findOneBy({
        id: fid,
    })
    // const item = dataItems.find((item) => item.id === id);
    // if (item) {
    //     return Promise.resolve(item);
    // }
    // return Promise.reject();
}

//for post method
export const addItem = (newData: NewItems) => {
    AppDataSource.manager.insert(Food, newData);
    return Promise.resolve(findAll());
}

//for put method
export const updatedItem = async (fid: number, item: Items) => {
    const foodRepository = AppDataSource.getRepository(Food)
    let foodToUpdate = await foodRepository.findOneBy({
        id: fid,
    })
    if (foodToUpdate) {
        foodToUpdate.name = item.name;
        foodToUpdate.category = item.category;
        await foodRepository.save(foodToUpdate);
        return Promise.resolve(findAll());
    }
    return Promise.reject();


    // const dataItemById = dataItems.find((item1) => item1.id === id)
    // if(dataItemById){
    //     dataItemById.id = item.id;
    //     dataItemById.title = item.title;
    //     dataItemById.body = item.body;
    //     return Promise.resolve(dataItemById)
    // }else{
    //     return Promise.reject();
    // }
    // const i = dataItems.findIndex((a) => a.id === id);
    // dataItems[i].title = item.title;
    // dataItems[i].body = item.body;
    // return Promise.resolve(dataItems)

}

//for delete method
export const deleteItem = async(fid: number) => {
    const foodRepository = AppDataSource.getRepository(Food)
    let foodToRemove = await foodRepository.findOneBy({
        id: fid,
    })
    if(foodToRemove)
    await foodRepository.remove(foodToRemove)
}
// export const deleteItem = (id: number) => {
//     const index = dataItems.findIndex((obj) => obj.id === id);
//     console.log(index)
//     dataItems.splice(index, 1);
//     return Promise.resolve(dataItems);
// }