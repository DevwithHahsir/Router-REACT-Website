/* eslint-disable no-undef */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import User from "./componenets/User";
import Github from "./componenets/Github";
import './CSSFiles/Navbar.css'
import './CSSFiles/Herosection.css'
import './CSSFiles/Github.css'



const router= createBrowserRouter([
  {
    path:"/home",
    element:<><Header/><Home/></>
  },
  {
    path:"/aboutus",
    element:<><Header/><About/></>
  },
  {
    path:"/contact",
    element:<><Header/><Contact/></>
  },
  {
    path:"/:UserId",
    element:<><Header/><User/></>
  },
  {
    path:"/github",
    element:<><Header/><Github/></>
  },


])


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
);
