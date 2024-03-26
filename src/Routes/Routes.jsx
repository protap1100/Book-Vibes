import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ListedBook from "../Pages/ListedBook";
import PagesToRead from "../Pages/PagesToRead";
import Recommendations from "../Pages/Recommendations";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Components/BookDetails";
import ReadedBook from "../Components/ReadedBook";
import WishList from "../Components/WishList";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            index : true,
            element :<Home></Home>,
            loader: () => fetch('/Books.json')
        },
        {
            path:'/book/:id',
            element:<BookDetails></BookDetails>,
            loader: () => fetch(`/Books.json`)
        },
        {
            path: '/listedBooks',
            element: <ListedBook></ListedBook>,
            children: [
                {
                    index:true,
                    element: <ReadedBook></ReadedBook>,
                },
                {
                    path:'wishList',
                    element:<WishList></WishList>
                }
            ]
        },
        {
            path:'/pagesToRead',
            element : <PagesToRead></PagesToRead>
        },
        {
            path:'/recommendations',
            element : <Recommendations></Recommendations>
        },
        {
            path:'/contact',
            element : <Contact></Contact>
        },
        
      ]
    },
   
  ]);