import {  DetailedHTMLProps, HTMLAttributes, ReactNode, } from "react";
import './main.css'

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    Children: ReactNode;
}


const MainLayout = ({Children}: IProps) => {
return <div className="sm md lg xl bg-baseBlue h-full">
    <header className=" container mx-auto
  
    bg-gradient-to-r from-indigo-500 to-transparent
      pb-50
      mb-5
      ">
        <div className="flex pt-50 justify-center">
            <span className="font-bold text-3xl text-center italic">
            TO DO LIST
            </span>
         
        </div>
    
    </header>
            <div>
        {Children}
            </div>


    {/* <footer className="container mx-auto bg-blue-500">
    <div className="flex pt-50 justify-between ">
        Footer 
        </div>
    </footer> */}
</div>
};

export default MainLayout;