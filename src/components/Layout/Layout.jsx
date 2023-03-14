import React from "react";
import Content from "../Content/Content";
import "./Layout.css";

const Layout = ({ children }) => {
  return <Content>{children}</Content>;
};

export default Layout;