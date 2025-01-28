import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const router = createBrowserRouter([
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
]);

const App = () => {
  return <div className="bg-zinc-900 w-screen h-screen">
    return <RouterProvider router={router}/>
  </div>;
};

export default App;
