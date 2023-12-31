import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { LayoutMain } from "../layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/project", element: <Project /> },
      { path: "/experience", element: <Experience /> },
    ],
  },
]);

export default Router;
