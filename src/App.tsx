import { Route, Routes } from "react-router-dom"
import MainPage from "./components/MainPage"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
<Route path='/' element={<MainPage/>}/>
    </Routes>
    // <>
    //  <h1 className='text-3xl font-bold underline'>Hello World</h1>
    // </>
  )
}

export default App
