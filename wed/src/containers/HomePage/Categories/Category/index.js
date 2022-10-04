import "./style.css";
import { Link } from "react-router-dom";
import React from "react";

const Category = ({ title, image }) => {
  return (
    <div className="category">
      <img src={image} alt="category" className="category-image" />
      <button className="btn">{title}</button>
    </div>
  );
};

export default Category;
