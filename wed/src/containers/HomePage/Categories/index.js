import { Link } from "react-router-dom";
import React from "react";
import Category from "./Category/index";
import Title from "./Title/Title";
import "./style.css";
import ao from "../../../images/categories/ao-polo-nam-aristino-APS193S2-02x900x900x4.jpg";
import quan from "../../../images//categories/quan-au-nam-aristino-ATR00602-06x500x500x4.jpg";
import pk from "../../../images//categories/images-2.jpg";
/**
 * @author
 * @function Categories
 **/
const Categories = () => {
  return (
    <>
      <section className="py-5 section-bg">
        <div className="container">
          <Title title="BROWSE OUR CATEGORIES" />
          <div className="items">
            <div className="col">
              <Link to="/Ao-Polo-TCaCbM8Wf?cid=6290a67267263325f046758a&type=store">
                <Category image={ao} />
              </Link>
              <a href="http://localhost:3000/Ao-Polo-TCaCbM8Wf?cid=6290a67267263325f046758a&type=store">
                Áo polo
              </a>
            </div>
            <div className="col">
              <Link to="/Quan-Au-JhToNyVO_?cid=6290a69067263325f046758c&type=page">
                <Category image={quan} />
              </Link>
              <a href="Quan-Au-JhToNyVO_?cid=6290a69067263325f046758c&type=page">
                Quần
              </a>
            </div>
            <div className="col">
              <Link to="/Phu-kien-k6byDCgdM?cid=6290b22208680637d8ee4551&type=undefined">
                <Category image={pk} />
              </Link>
              <a href="http://localhost:3000/Phu-kien-k6byDCgdM?cid=6290b22208680637d8ee4551&type=undefined">
                Phụ kiện
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
