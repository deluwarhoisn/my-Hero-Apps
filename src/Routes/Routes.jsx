import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
         {
   path:"/",
    element: <Home/>,
  },
  {
    path: "/Apps",
    element: <Apps/>,
  },
  {
    path:"/Installation",
    element: <Installation/>
  }
    ]
  },
 

]);

export default router