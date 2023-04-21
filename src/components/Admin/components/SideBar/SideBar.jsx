import {
  AppstoreOutlined,
  OrderedListOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GetAllOrderPendding } from "../../../../store/order/OrderAction";
import "./SideBar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const orderPendding = useSelector((state) => state.allOrder);

  let totalNewOrder = 0;
  if (orderPendding) {
    totalNewOrder = orderPendding.length;
  }

  useEffect(() => {
    const getNewOrder = () => {
      dispatch(GetAllOrderPendding());
    };
    getNewOrder();
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://levents.asia/wp-content/uploads/2021/10/logo.png"
          alt="Levents"
        />
      </div>
      <div className="sidebar-list">
        <Link to="/admin" className="sidebar-list-item">
          <span>
            <AppstoreOutlined />
          </span>
          <p>Dashboard</p>
        </Link>

        <Link to="/admin/dashboard/customer" className="sidebar-list-item">
          <span>
            <UserAddOutlined />
          </span>
          <p>Customer</p>
        </Link>

        <Link to="/admin/dashboard/product" className="sidebar-list-item">
          <span>
            <ShoppingCartOutlined />
          </span>
          <p>Products</p>
        </Link>

        <Link to="/admin/dashboard/order" className="sidebar-list-item">
          <span>
            <OrderedListOutlined />
          </span>
          <p>
            Order
            <div className="admin-order-new">{totalNewOrder}</div>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
