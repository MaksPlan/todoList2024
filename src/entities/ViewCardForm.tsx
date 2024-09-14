import { FC, useContext, useState } from "react"
import FormWrapper from "../components/FormWrapper"
import { IData } from "../mock/data"
import { modalState } from "../hooks/useModal";

interface IProps {
    card: IData;
  
}

 const ViewCardForm: FC<IProps> = ({card}) => {
    const {title, descrpt, completed}  = card

    const [editToggler, setEditToggler] = useState<boolean>(true)
    const {closeModal} = useContext(modalState)
    const [newTitle, setNewTitle]  = useState<string>('')

 return   <FormWrapper>

     <form id="card-form" className="flex flex-col gap-y-2">
    <input disabled={editToggler ? true : false} defaultValue={title} 
    onChange={(e) => setNewTitle(e.target.value)}
    />
      <input disabled={editToggler ? true : false} defaultValue={descrpt} 
    onChange={(e) => setNewTitle(e.target.value)}/>

<div className="flex">
           <input type="checkbox" name='complite'/>
            <label htmlFor="complite">complite</label>
        </div>
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
      <button type="submit" onClick={(e) => updateForm(e)}>Save</button>
        </form>

    </FormWrapper>

   
    

    function updateForm(e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault()
      const appForm = document.getElementById('card-form')
      console.log(appForm)
      closeModal()
    }
   
};

export default ViewCardForm