import React from "react";
import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.sidebar ? (
        <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li>
                  <NavLink exact to={`/`}>
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/page`}>Page</NavLink>
                </li>
                <li>
                  <NavLink to={`/category`}>Danh mục</NavLink>
                </li>
                <li>
                  <NavLink to={`/products`}>Sản Phẩm</NavLink>
                </li>
                <li>
                  <NavLink to={`/orders`}>Đặt hàng</NavLink>
                </li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: "auto", paddingTop: "60px" }}>
              {props.children}
            </Col>
          </Row>
        </Container>
      ) : (
        props.children
      )}
    </>
  );
};

export default Layout;
