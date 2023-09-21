import React from "react";
import { Link } from "react-router-dom";

let navList = [
  { title: "About", url: "/about" },
  { title: "Project", url: "/project" },
  { title: "Experience", url: "/experience" },
];

const Navbar = () => {
  return (
    <nav className="text-white text-xl">
      {navList.map((list, i) => (
        <Link to={list.url} key={i} className="mx-2">
          {list.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

