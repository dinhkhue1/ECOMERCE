import React from "react";
import Card from "../../components/UI/Card";

/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <Card headerLeft={"Chi tiết giá cả"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Giá ({props.totalItem} đơn)</div>
          <div>{props.totalPrice}</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Phí vận chuyển</div>
          <div>Miễn phí</div>
        </div>
        <div className="flexRow sb" style={{ margin: "10px 0" }}>
          <div>Tổng cộng</div>
          <div>{props.totalPrice}</div>
        </div>
      </div>
    </Card>
  );
};

export default PriceDetails;
