import { FC, useState } from "react";
import { IData } from "../mock/data";
import ButtonAction from "../components/ButtonAction";
import Modal from "../components/Modal";
import FormWrapper from "../components/FormWrapper";
import { addToList, deleteFromList,updateCard ,useAppDispatch } from "../store/cardListSlice";
import FormIWindow from "../components/FormIWindow";

interface IProps {
    cardData: IData;
}

// повторяется логика с тоглерами на использование моадлки, создать кастомный хук
// вынести логику удаления и просмотра модалки в отдельные компоненты
// исправить стили на карточках
// добавить в карточку поля: категория, исполнено, дата создания и исполнения
// создать поиск по массиву задач


const Card: FC<IProps> = ({cardData}): JSX.Element => {
    const [toggler, setToggler] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [viewToggler, setViewToggler] = useState<boolean>(false)
    const [editToggler, setEditToggler] = useState<boolean>(true)
    const [newTitle, setNewTitle]  = useState<string>('')
    const dispatch = useAppDispatch();


    const deleteModalHandler = () => {        
      setToggler(!toggler)
      setDeleteModal(!deleteModal)
      dispatch(deleteFromList(cardData))
    }

    const cancleHandler = () => {
        setToggler(!toggler)
        setDeleteModal(!deleteModal)
    }
    
    const viewwHanler = () => {
        setViewToggler(!viewToggler)
        setToggler(!toggler)
    }

    const updateCardData = () => {

        dispatch(updateCard({
            ...cardData,
            title: newTitle,
        }));
        viewwHanler();
    }
   
    const {title, descrpt, completed, category} = cardData


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
         <div className="px-5 py-2">
            <p className="italic bold text-xl mx-0.5 p-x-12"> {title}</p>

          
        </div>
        <div className="px-5 py-2">
            <p>
                {category}
            </p>
        </div>
      
        <div>
            <ButtonAction name={'view'} onClick={viewwHanler}/>
        </div>
        <div className="justify-self-end">
              <ButtonAction name={'delete'} onClick={cancleHandler}/>
        </div>
      
       
{/* Компонент модалки для удаления карточки */}

      {(toggler && <div className="flex justify-center">
        <Modal>
       { deleteModal  &&  <FormWrapper>
                <div className="bg-white rounded border-blueBase mt-5 p-x-3">
                    <h2>
                         Wanna delete from list ?
                    </h2>
                </div>
                <div className="p-x-10 pt-5 flex flex-row justify-between">
                    <ButtonAction name={'delete'} onClick={deleteModalHandler}/>
                <ButtonAction name={'cancle'} onClick={cancleHandler}/>
                </div>
                
            </FormWrapper>}

            {
        viewToggler && <FormWrapper>
            
                 <div className="flex flex-wrap justify-content">
                    <input disabled={editToggler ? true : false} defaultValue={title} className="mt-5"
                    onChange={(e) => setNewTitle(e.target.value)}
                    />
                      <input disabled={editToggler ? true : false} defaultValue={descrpt} className="mt-5 ml-5"
                    onChange={(e) => setNewTitle(e.target.value)}/>

                      <input type="checkbox" 
                      className="ml-7 mt-5"
                      defaultChecked={completed}/>
                      <select name="category" id=""  className="mx-5 my-3">
                        <option> must do
                        </option>
                        <option>
                            should do
                        </option>
                        <option>
                            not a problem
                        </option>
                      </select>
                  
                </div>
                <div className="mt-5">
              
                <ButtonAction name={'edit'} onClick={() => setEditToggler(!editToggler)} />
                <ButtonAction onClick={viewwHanler} name={'close'} />
                <ButtonAction name={'save'} onClick={() => updateCardData()}/>
                </div>
                
        
        </FormWrapper >

            }
        </Modal>
      </div>
       )}
    </div>
       
    
};

export default Card;