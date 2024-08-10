import InputField from './InputField';

const FormIWindow = () => {
    return (
        <div className='container bg-cgray flex bg-gray  flex-col mx-auto  w-1/2  '>
            
          <InputField name={'Task Name'}/>
          <InputField name={'Description'} />
        </div>
    );
};

export default FormIWindow;