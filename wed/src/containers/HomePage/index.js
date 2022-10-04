import React from "react";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import MenuHeader from "../../components/MenuHeader";
import MainBanner from "./MainBanner";
import Categories from "./Categories";
import Hero from "./Hero";
import "./style.css";
/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <Layout>
      <MainBanner />
      <Categories />
      <Hero />
    </Layout>
  );
};

export default HomePage;
