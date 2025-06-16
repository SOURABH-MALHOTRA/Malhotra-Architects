import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Services from "./Components/Services.jsx";
import Project from "./Components/Project.jsx";
import Login from "./Components/Login.jsx";
import Blog from "./Components/Blog.jsx";
import DeleteBlog from "./Components/DeleteBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "services",
        element: <Services />,
      },

      {
        path: "project",
        element: <Project />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "delete/blog",
        element: <DeleteBlog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
