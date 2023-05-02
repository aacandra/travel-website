import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Account from "./Components/Account/Account";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);