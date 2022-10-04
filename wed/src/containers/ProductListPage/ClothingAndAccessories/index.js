import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/Card";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { generatePublicUrl } from "../../../urlConfig";
import "./style.css";
import { Carousel } from "react-responsive-carousel";

/**
 * @author
 * @function ClothingAndAccessories
 **/

const ClothingAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ margin: "0 10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "10px 0",
          }}
        ></div>
      </div>

      <Card
        style={{
          boxSizing: "border-box",
          padding: "10px",
        }}
      >
        <div className="conten">
          {product.products.map((product) => (
            <div className="caContainer">
              <Link
                className="caImgContainer"
                to={`/${product.slug}/${product._id}/p`}
              >
                <img
                  src={generatePublicUrl(product.productPictures[0].img)}
                  alt=""
                />
              </Link>
              <div>
                <div className="caProductName">{product.name}</div>
                <div className="caProductPrice">{product.price}Đ</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ClothingAndAccessories;
