import { Route, Routes, } from "react-router-dom"
import MainPage from "./entities/MainPage"

function App() {
// const dispatch = ;

 
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
    // <>
    //  <h1 className='text-3xl font-bold underline'>Hello World</h1>
    // </>
  )
  
}
export default  App
