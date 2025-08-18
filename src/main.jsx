import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Root from './components/Root/Root.jsx';
import Home from './components/Home/home.jsx';
import Dashbord from './components/Dashbord/Dashbord.jsx';
import BookDetail from './components/BookDetail/BookDetail.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import LIsterBooks from './components/ListerBooks/LIsterBooks.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json")
      },
      {
        path: 'listedBooks',
        element: <LIsterBooks></LIsterBooks>,
        loader: () => fetch("/booksData.json")
      },
      { 
        path: 'dashboard',
        element: <Dashbord></Dashbord>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
