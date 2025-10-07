import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <div></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Home></Home>
  </StrictMode>,
)
