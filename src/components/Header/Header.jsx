import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeValueSearch, search } from "../../store/search/search";
import "./Header.css";

const Header = () => {
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
                  width="98"
                  height="30"
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
                  <img
                    src="https://levents.asia/template/assets/images/notification.png"
                    alt=""
                  />
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
                  <img
                    src="https://levents.asia/template/assets/images/svg/ic-ser.svg"
                    alt=""
                    className="nav-search-btn"
                    onClick={handleSearch}
                  />
                </div>
              </div>
              <div className="header-cart">
                <div className="cart-btn">
                  <Link to="/cart">
                    <img
                      src="https://levents.asia/template/assets/images/svg/ic-cart.svg"
                      alt=""
                    />
                  </Link>
                  <div className="cart-num">
                    <p>{getTotalQuantity() || 0}</p>
                  </div>
                </div>
              </div>
              <div className="header-user">
                <div className="user-btn">
                  <img
                    src="https://levents.asia/template/assets/images/svg/ic-user.svg"
                    alt=""
                  />
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
                <a href="">Sản phẩm</a>
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
                <a href="">Bài viết</a>
              </li>
              <li className="menu-item">
                <a href="">Liên hệ</a>
              </li>
              <li className="menu-item">
                <a href="">Chăm sóc khách hàng</a>
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
