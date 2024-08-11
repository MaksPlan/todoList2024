import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'// import MainLayout from './layout/MainLayout.tsx'
import { Provider } from 'react-redux'
import store from './store/cardListSlice.ts'
import MainLayout from './layout/MainLayout.tsx'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <BrowserRouter>
<MainLayout Children={<App/>}>
{/* <App /> */}
</MainLayout>
</BrowserRouter>
    </Provider>

  </React.StrictMode>,
)
