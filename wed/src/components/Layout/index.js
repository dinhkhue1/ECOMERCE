import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import MenuHeader from "../MenuHeader";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
