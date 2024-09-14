import { FC } from "react";
import { IData } from "../mock/data";
import useModal from "../hooks/useModal";
import ViewCardForm from "./ViewCardForm";

interface IProps {
    cardData: IData;
}

// повторяется логика с тоглерами на использование моадлки, создать кастомный хук
// вынести логику удаления и просмотра модалки в отдельные компоненты
// исправить стили на карточках
// добавить в карточку поля: категория, исполнено, дата создания и исполнения
// создать поиск по массиву задач


const Card: FC<IProps> = ({cardData}): JSX.Element => {
    
   
    const {title, completed, category} = cardData
    const {createModal, openModal, closeModal} = useModal(<ViewCardForm card={cardData} />)


    return <div className=" 
    grid
    grid-cols-4
    p-x-10
    p-y-10
    box-border
     bg-activeBlue
    scale-50 hover:scale-75 ease-in duration-500
      " >
        {/* Компонент карточки */}
     
     <p>
        {title}
     </p>
     <p>
        {category}
     </p>
     {completed ? <p>complite</p> : <p>active</p>}

     <button onClick={openModal}>
        view task
     </button>
        {createModal() }
</div>
      
    
};

export default Card;