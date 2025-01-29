import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import ErrorPage from "./components/layout/UI/ErrorPage";

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/country",
        element: <Country />,
      },
      {
        path: "/contact",
        element: <Contact />, 
      },
    ]
  },
]);

const App = () => {
  return <div className=" text-white">
    <RouterProvider router={router}/>
  </div>;
};

export default App;
