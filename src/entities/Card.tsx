import { FC, useState } from "react";
import { IData } from "../mock/data";
import ButtonAction from "../components/ButtonAction";
import Modal from "../components/Modal";
import FormWrapper from "../components/FormWrapper";
import { deleteFromList, useAppDispatch } from "../store/cardListSlice";

interface IProps {
    cardData: IData;
}

const Card: FC<IProps> = ({cardData}): JSX.Element => {
    const {title, id} = cardData
    const [toggler, setToggler] = useState<boolean>(false)
    const disatch = useAppDispatch()

    const deleteModalHandler = () => {        
      setToggler(!toggler)
      disatch(deleteFromList(cardData))
    }

    const cancleHandler = () => {
        setToggler(!toggler)
        
    }

    return <div className=" basis-2/4
    size-min
    p-x-10
    p-y-10
    box-border
     bg-activeBlue
    scale-50 hover:scale-75 ease-in duration-500
      " >
         <div className="pr-5">
            <p className="italic bold text-xl mx-0.5"> {title}</p>
            <ButtonAction name={'delete'} onClick={cancleHandler}/>
        </div>
       

      {(toggler && <div className="flex justify-center">
        <Modal>
            <FormWrapper>
                <div className="bg-white rounded border-blueBase mt-5 p-x-3">
                    <h2>
                         Wanna delete from list ?
                    </h2>
                </div>
                <div className="p-x-10 pt-5 flex flex-row justify-between">
                    <ButtonAction name={'delete'} onClick={deleteModalHandler}/>
                <ButtonAction name={'cancle'} onClick={cancleHandler}/>
                </div>
                
            </FormWrapper>
        </Modal>
      </div>
       )}
    </div>
       
    
};

export default Card;