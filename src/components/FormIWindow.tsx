import { useContext } from "react";
import FormWrapper from "./FormWrapper";
import { modalState } from "../hooks/useModal";
import ButtonAction from "./ButtonAction";



const FormIWindow = () => { 

  const {closeModal} = useContext(modalState)

    return (
        <FormWrapper>

          <form action="submit">
            <legend>Task Name</legend>
            <input type="text" placeholder='text...'/>
            <legend>Discription</legend>
            <input type='text' placeholder='...'/>

            <select name="priority" id="select">
              <option value="3">must do</option>
              <option value="2">should do</option>
              <option value="1">not important</option>
            </select>

            <input type="checkbox" name='complite'/>
            <label htmlFor="complite">complite</label>
          </form>

      <ButtonAction name="create" onClick={closeModal} />
        </FormWrapper>      
      
    );
};

export default FormIWindow;