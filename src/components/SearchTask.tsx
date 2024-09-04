import { FC, useState } from "react";
import { getCardList, useAppSelector } from "../store/cardListSlice";
import { IData } from "../mock/data";

interface ISerarch {
    search: () => IData[] | [];
}

const SearchTask: FC<ISerarch> = ({search}) => {

    

    const [searchThisTask, setSearchThisTask] = useState<string>('')
    const searchArray: IData[] | [] = []
    const getTaskList = useAppSelector(getCardList);

     const searchThrottling = (value: string) => {
            setTimeout(
                () => {
                    setSearchThisTask(value)
                }, 0.5
            )
        };

     const fillterFunc = () => {
        getTaskList.filter(
            (task: IData) => {
                searchThisTask == task.title || task.descrpt
                searchArray.push(task);
            }
        )
        search(searchArray)
        console.log(searchArray)
        // return searchArray
     }   



   return <input type="text" onChange={
        (e) => {
            searchThrottling(e.target.value)
            fillterFunc();
        }
    }  />

};

export default SearchTask