import { useContext, useState } from "react";
import FormWrapper from "./FormWrapper";
import { modalState } from "../hooks/useModal";
import ButtonAction from "./ButtonAction";
import { addToList, useAppDispatch } from "../store/cardListSlice";
import { IData } from "../mock/data";



const FormIWindow = () => { 

  const {closeModal} = useContext(modalState)
  const [title, setTitile] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [priority, setPriority] = useState<string>('')
  const [complity, setComplity] = useState<boolean>(false);

  const dispatch = useAppDispatch();


    return (
        <FormWrapper>

          <form action="submit" className="flex flex-col gap-y-2">
            <legend>Task Name</legend>
            <input type="text" name="title" placeholder='text...'
            onChange={(e) => setTitile(e.target.value)}
            />
            <legend>Discription</legend>
            <input type='text' name="descript" placeholder='...'
            onChange={(e) => setDescription(e.target.value)}
            />

            <select name="priority" id="select" onChange={
              (e) => setPriority(e.target.name)
            }>
              <option value="3">must do</option>
              <option value="2">should do</option>
              <option value="1">not important</option>
            </select>
        <div className="flex">
           <input type="checkbox" name='complite'
           onChange={(e) => setComplity(e.target.checked)}
           />
            <label htmlFor="complite">complite</label>
        </div>   
          </form>

      <ButtonAction name="create" onClick={createFormRedux} />
        </FormWrapper>      
      
    );

    function createFormRedux() {
      const data:IData = {
        title,
        descrpt: description,
        completed: complity,
        category: priority,
        dateCreate: '',
        dateComplity: '',
        id: Math.random(),
      };

     dispatch(addToList(data));
     closeModal(); 
    };
};

export default FormIWindow;