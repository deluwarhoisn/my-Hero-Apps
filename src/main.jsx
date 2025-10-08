import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, Link, Outlet, Route, Routes } from "react-router";
import { RouterProvider } from "react-router-dom";
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Apps from './Compnents/Apps.jsx';
import Installation from './Compnents/Installation.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home></Home>,
    
    
  },
 
  {
    path:"/Installation",
    element: <Installation></Installation>
  },
   {
    path:"/Apps",
    element: <Apps></Apps>,
    
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />,
   
    
     <Navbar></Navbar>
     <Outlet></Outlet>
  </StrictMode>,
)
