import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeValueSearch, search } from "../../store/search/search";
import Login from "../LogIn/Login";
import "./Header.css";
import {BellOutlined, DownOutlined, SearchOutlined, ShoppingOutlined, UserOutlined} from "@ant-design/icons"

const 
Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart || []);
  const [valueInput, setValueInput] = useState("");
  console.log("cart", cart);
  const handleChangeInput = (e) => {
    setValueInput(e.target.value);
  };

  function handleSearch(){
    dispatch(changeValueSearch(valueInput))
  }

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="navbar">
      <header className="navbar-header">
        <div className="l-navbar-header">
          <span>levents loves you</span>
        </div>
        <div className="r-navbar-header">
          <div className="menu-drop">
            <span>mua ngay!</span>
          </div>
        </div>
      </header>
      <div className="header-top">
        <div className="nav-header-top">
          <div className="col-header-top"></div>
          <div className="col-header-top">
            <div className="header-logo">
              <Link to="/">
                <img
                  width={98}
                  height={30}
                  src="https://levents.asia/wp-content/uploads/2021/10/logo.png"
                  class="custom-logo"
                  alt="Levents"
                />
              </Link>
            </div>
          </div>
          <div className="col-header-top">
            <div className="header-list">
              <div className="header-noti">
                <div className="noti-btn" onClick={() => navigate("/cart")}>
                  <BellOutlined />
                  <div className="noti-num">
                    <p>{getTotalQuantity() || 0}</p>
                  </div>
                </div>
              </div>
              <div className="header-product">
                <a href="/">Sản phẩm yêu thích</a>
              </div>
              <div className="header-search">
                <div className="search-btn">
                  <input
                    type="text"
                    onChange={(e) => handleChangeInput(e)}
                    value={valueInput}
                    placeholder="Tìm kiếm sản phẩm"
                  />
                  <SearchOutlined
                    className="nav-search-btn"
                    onClick={handleSearch}
                  />
                </div>
              </div>
              <div className="header-cart">
                <div className="cart-btn">
                  <Link to="/cart">
                    <ShoppingOutlined />
                  </Link>
                  <div className="cart-num">
                    <p>{getTotalQuantity() || 0}</p>
                  </div>
                </div>
              </div>
              <div className="header-user">
                <div className="user-btn">
                  <Link to="/login">
                    <UserOutlined />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bot">
        <div className="nav-header-bot">
          <div className="header-menu">
            <ul className="main-menu">
              <li className="menu-item">
                <a href="">Về chúng tôi</a>
              </li>
              <li className="menu-item">
                <a href="">
                  Cửa hàng
                  <div className="submenu-btn">
                    <DownOutlined />
                  </div>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="">Tất cả</a>
                  </li>
                  <li>
                    <a href="">Sản phẩm mới</a>
                  </li>
                  <li>
                    <a href="">Áo</a>
                  </li>
                  <li>
                    <a href="">Quần</a>
                  </li>
                  <li>
                    <a href="">Áo khoác</a>
                  </li>
                  <li>
                    <a href="">Cặp sách</a>
                  </li>
                  <li>
                    <a href="">Phụ kiện</a>
                  </li>
                  <li>
                    <a href="">Bộ sưu tập</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="" style={{ color: "red" }}>
                  Giảm giá
                </a>
              </li>
              <li className="menu-item">
                <a href="">Bộ sưu tập</a>
              </li>
              <li className="menu-item">
                <a href="">Bộ phối</a>
              </li>
              <li className="menu-item">
                <a href="">
                  Bài viết
                  <div className="submenu-btn">
                    <DownOutlined />
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="">Liên hệ</a>
              </li>
              <li className="menu-item">
                <a href="">
                  Chăm sóc khách hàng
                  <div className="submenu-btn">
                    <DownOutlined />
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="">Tuyển dụng</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="banner">
        <img
          width="100%"
          height="988"
          src="https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1.png"
          class="ban__des"
          alt=""
          loading="lazy"
          srcset="https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1.png 1920w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-300x154.png 300w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-1024x527.png 1024w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-768x395.png 768w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-1536x790.png 1536w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-1000x515.png 1000w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-255x131.png 255w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-100x51.png 100w, https://levents.asia/wp-content/uploads/2023/01/website-1920x988-1-850x437.png 850w"
          sizes="(max-width: 1920px) 100vw, 1920px"
        />
      </div>
      <div href="" className="banner-btn">
        <div className="banner-btn-1">
          <a href="" className="ban-btn">
            Bộ sưu tập mới
          </a>
        </div>
      </div>
      <section className="title">
        <div className="con-title">
          <h2 className="sec-title">sản phẩm nổi bật của levents</h2>
        </div>
      </section>
    </div>
  );
};

export default Header;
