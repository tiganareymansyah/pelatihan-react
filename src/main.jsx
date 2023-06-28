import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/pertemuan-7.1/pages/Home.jsx";
import About from "./components/pertemuan-7.1/pages/About.jsx";
import Contact from "./components/pertemuan-7.1/pages/Contact.jsx";
import Product from "./components/pertemuan-7.1/pages/Product.jsx";
import Login from "./components/pertemuan-7.1/pages/index.jsx";
import Register from "./components/pertemuan-7.1/pages/Register.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
