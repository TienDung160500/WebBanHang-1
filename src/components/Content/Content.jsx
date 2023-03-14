import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Content.css"

const Content = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Content;
