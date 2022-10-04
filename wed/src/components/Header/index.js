import React, { useEffect, useState } from "react";
import "./style.css";
import Logo from "../../images/logo/logo.png";
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.fullName}</a>}
        menus={[
          { label: "Thông tin cá nhân", href: "", icon: null },

          {
            label: "Đơn hàng",
            href: `/account/orders`,
            icon: null,
          },
          { label: "Đăng xuất", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };

  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setSignup(false);
              setLoginModal(true);
            }}
          >
            Đăng nhập
          </a>
        }
        menus={[
          { label: "Tài khoản của tôi", href: "", icon: null },
          {
            label: "Đơn hàng",
            href: `/account/orders`,
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>Khách hàng mới?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setSignup(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Đăng ký
            </a>
          </div>
        }
      />
    );
  };

  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Đăng nhập</h2>
              <p>
                Nhận quyền truy cập vào Đơn đặt hàng, Danh sách yêu thích và Đề
                xuất của bạn
              </p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Tên "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Họ"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Số điện thoại"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Đăng kí" : "Đăng nhập"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        {/* Logo  */}
        <div className="logo">
          <a href="http://localhost:3000/">
            <img src={Logo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: "-10px" }}>
            <span className="exploreText">Khám phá</span>
            <span className="plusText">Thêm</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>
        {/* logo ends here */}

        {/* search component */}
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"tìm kiếm sản phẩm, thương hiệu"}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>

        {/* right side menu */}
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>Tiện ích</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "thông báo", href: "", icon: null },

              { label: "Chăm sóc khách hàng 24x7", href: "", icon: null },
              { label: "Quảng cáo", href: "", icon: null },
            ]}
          />
          <div>
            <a href={`/cart`} className="cart">
              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Giỏ Hàng</span>
            </a>
          </div>
        </div>
        {/* right side menu ends here */}
      </div>
    </div>
  );
};

export default Header;
