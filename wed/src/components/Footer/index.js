import React from "react";
import "./style.css";

/**
 * @author
 * @function Footer
 **/

const Footer = () => {
  return (
    <footer class="footer">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      ></link>
      <div class="container">
        <div class="hang">
          <div class="cot">
            <h4>Thông tin</h4>
            <ul>
              <li>
                <a href="#">Địa chỉ : số 10 - Trần Phú - Hà Đông</a>
              </li>
              <li>
                <a href="#">Số điện thoại : 18002222</a>
              </li>
              <li>
                <a href="#">Email: support@gmail.com</a>
              </li>
              <li>
                <a href="#">Mr.khue: 0961904720</a>
              </li>
            </ul>
          </div>
          <div class="cot">
            <h4>Liên hệ</h4>
            <ul>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Liên với chúng tôi</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Hệ thống cửa hàng</a>
              </li>
              <li>
                <a href="#">Trợ giúp?</a>
              </li>
            </ul>
          </div>
          <div class="cot">
            <h4>Hỗ trợ khách hàng</h4>
            <ul>
              <li>
                <a href="#">Hỏi đáp</a>
              </li>
              <li>
                <a href="#">Chính sách giao hàng</a>
              </li>
              <li>
                <a href="#">Hệ thống cửa hàng</a>
              </li>
              <li>
                <a href="#">chính sách hoàn trả</a>
              </li>
            </ul>
          </div>
          <div class="cot">
            <h4>Theo dõi chúng tôi</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
