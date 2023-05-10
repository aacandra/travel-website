import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Account from "./Components/Account/Account";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import Admin from "./Components/Admin/Admin"
import Banner from "./Components/Banner/Banner"
import Category from "./Components/Category/Category"
import Promo from "./Components/Promo/Promo"
import Activity from "./Components/Activity/Activity"



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <App />
        {/* <Footer/> */}
      </>
    ),
    errorElement: <p>Page Not Found</p>,
  },

  {
    // path: "/login",
    // element: (
    //   <>
    //     <NavBar />
    //     {/* <Login /> */}
    //     {/* <Footer /> */}
    //   </>
    // ),
  },

  {
    path: "/Account",
    element: (
      <>
        <NavBar />
        <Account />
        {/* <Footer /> */}
      </>
    ),
  },


  {
    path: "/UpdateProfile",
    element: (
      <>
        <NavBar />
        <UpdateProfile />
        {/* <Footer /> */}
      </>
    ),
  },

  {
    path: "/Admin",
    element: (
      <>
        {/* <NavBar /> */}
        <Admin />
        {/* <Footer /> */}
      </>
    ),
  },

  {
    path: "/Banner",
    element: (
      <>
        {/* <NavBar /> */}
        <Banner />
        {/* <Footer /> */}
      </>
    ),
  },

  {
    path: "/Activity",
    element: (
      <>
        {/* <NavBar /> */}
        <Activity />
        {/* <Footer /> */}
      </>
    ),
  },


  {
    path: "/Promo",
    element: (
      <>
        {/* <NavBar /> */}
        <Promo />
        {/* <Footer /> */}
      </>
    ),
  },

  {
    path: "/Category",
    element: (
      <>
        {/* <NavBar /> */}
        <Category />
        {/* <Footer /> */}
      </>
    ),
  },
  



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);