import React, { useState } from 'react';

const InputField = () => {
    const [inputState, setInputState] = useState<string>('Write Down')
    return (
        <div>
 <input autoFocus onChange={
        (e) => setInputState(e.target.value)
        
        } />
            
      <p>
        {inputState}
      </p>
        </div>
       
    );
};

export default InputField;