import { FC, useState } from "react";
import { IData } from "../mock/data";
import ButtonAction from "../components/ButtonAction";
import Modal from "../components/Modal";
import FormWrapper from "../components/FormWrapper";
import { deleteFromList, useAppDispatch } from "../store/cardListSlice";
import FormIWindow from "../components/FormIWindow";

interface IProps {
    cardData: IData;
}



const Card: FC<IProps> = ({cardData}): JSX.Element => {
    const {title, descrpt, completed, category} = cardData
    const [toggler, setToggler] = useState<boolean>(false)
    const disatch = useAppDispatch()
    const [deleteModal, setDeleteModal] = useState<boolean>(false)
    const [viewToggler, setViewToggler] = useState<boolean>(false)
    const [editToggler, setEditToggler] = useState<boolean>(false)

    const deleteModalHandler = () => {        
      setToggler(!toggler)
      setDeleteModal(!deleteModal)
      disatch(deleteFromList(cardData))
    }

    const cancleHandler = () => {
        setToggler(!toggler)
        setDeleteModal(!deleteModal)
    }
    
    const viewwHanler = () => {
        setViewToggler(!viewToggler)
        setToggler(!toggler)
    }
   


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
         <div className="pr-5">
            <p className="italic bold text-xl mx-0.5"> {title}</p>
            {/* <p>{descrpt}</p> */}
          
        </div>
        <div>
            <p>{category}</p>
        </div>
        <div>
            {/* <ButtonAction name={"view"} }/> */}
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
            <div>
                <div>
                    <input disabled={editToggler ? true : false} placeholder={title}
                    onChange={(e) => e.target.value}
                    />
                </div>
                <button onClick={() => setEditToggler(!editToggler)}>edit</button>
                <ButtonAction onClick={viewwHanler} name={'close'} />
            </div>
        </FormWrapper >

            }
        </Modal>
      </div>
       )}
    </div>
       
    
};

export default Card;