import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ListedBook from "../Pages/ListedBook";
import PagesToRead from "../Pages/PagesToRead";
import Recommendations from "../Pages/Recommendations";
import OurShop from "../Pages/OurShop";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
            index : true,
            element :<Home></Home>
        },
        {
            path: '/listedBooks',
            element: <ListedBook></ListedBook>
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
            path:'/ourShop',
            element : <OurShop></OurShop>
        },
        
      ]
    },
   
  ]);