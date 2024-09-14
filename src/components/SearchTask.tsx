import { FC, SetStateAction, useEffect, useState } from "react";
import { IData } from "../mock/data";
import { getCardList, TCardListState,  useAppSelector } from "../store/cardListSlice";

interface ISerarch {
    search: React.Dispatch<React.SetStateAction<TCardListState | IData[] | []>>
}

const SearchTask: FC<ISerarch> = ({search}) => {

const mainCardList = useAppSelector(getCardList)
const [filltredSearcH, setFilltredSearch] = useState<string>("")

useEffect(() => {
 serachHandler();
}, [filltredSearcH])

  
const searchDebounce = (e: { target: { value: SetStateAction<string>; }; }) => {
  setTimeout(() => {
        setFilltredSearch(e.target.value);
        serachHandler();
  }, 0.5)
}

   return <input type="text" onChange={
    (e) => searchDebounce(e)} />

   function serachHandler()  {
    const result: IData[] | [] = [];

     mainCardList.filter((data: IData) => {
     if   (data.title.toLowerCase().includes(filltredSearcH) || data?.descrpt.toLowerCase().includes(filltredSearcH)) {
        result.push(data)
     }
    })
   search(result.length > 0 ? result : mainCardList) 
}

   }

export default SearchTask;