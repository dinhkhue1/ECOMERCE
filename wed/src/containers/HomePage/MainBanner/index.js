import "./style.css";
import { Link } from "react-router-dom";
import React from "react";
/**
 * @author
 * @function MainBanner
 **/

const MainBanner = () => {
  return (
    <div className="banner">
      <div className="hero">
        <h1 className="title">
          Mua sắm cho bạn và
          <br />
          gia đình, bạn bè
          <br />
        </h1>
        <Link
          to="/Ao-Polo-TCaCbM8Wf?cid=6290a67267263325f046758a&type=undefined"
          className="btn"
        >
          Sản phẩm
        </Link>
      </div>
    </div>
  );
};

export default MainBanner;
