import { FC, useState, } from 'react';
import InputField from './InputField';
import ButtonAction from './ButtonAction';
import { IData } from '../mock/data';
import { addToList, useAppDispatch } from '../store/cardListSlice';
import FormWrapper from './FormWrapper';

interface IProps {
  onClick: () => void;
}
// onClick: modalButtonHandler переключатель модалки
const FormIWindow: FC<IProps> = ({onClick}) => {
      const [cardData, setCardData] = useState<IData | null>(null)
      const dispatch = useAppDispatch()

      const inputHandler = (data: IData | null) => {
        setCardData(data)
      }
      const creatNewCard = () => {
        onClick();
        cardData &&  dispatch(addToList(cardData))
      }

    return (
      
        <FormWrapper>
          <InputField name={'Task Name'} setImputData={inputHandler}/>
          {/* <InputField name={'Description'} /> */}
          <ButtonAction name={'create'} onClick={creatNewCard} />
        </FormWrapper>      
      
    );
};

export default FormIWindow;