import React from "react";
import { BiRupee } from "react-icons/bi";

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div
      style={{
        fontSize: props.fontSize ? props.fontSize : "14px",
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      {props.value}Đ
    </div>
  );
};

export default Price;
