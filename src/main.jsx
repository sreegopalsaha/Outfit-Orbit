import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/cart/Cart.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx'

const router = createBrowserRouter([
    {
      path : '/',
    element : <Layout/>,
    children : [
      {
        path: '',
        element : <Home/>
      },
      {
        path: 'cart',
        element : <Cart/>
      },
      {
        path: 'LoginPage',
        element : <LoginPage/>
      },
    ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
