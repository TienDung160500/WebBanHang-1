import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate, Routes, Navigate } from "react-router-dom";
import "./Admin.css";
import AdminUser from "./components/AdminUser/AdminUser";
import AdminOrder from "./components/AdminOrder/AdminOder";
import AdminCreate from "./components/AdminProduct/AdminCreate";
import AdminProduct from "./components/AdminProduct/AdminProduct";
import AdminUpdate from "./components/AdminProduct/AdminUpdate";
import DataFilterProduct from "./components/AdminProduct/DataFilterProduct/DataFilterProduct";
import ReviewProduct from "./components/AdminProduct/ReviewProduct/ReviewProduct";
import AppChat from "./components/Appchat/AppChat";
import Dashboard from "./pages/Dashboard";

const Admin = () => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfor } = userSignin;
  const navigate = useNavigate();

  if (!userInfor || !userInfor.isAdmin) {
    navigate("/");
  }

  return (
    //   <Routes>
    //       <Route
    //       render={() => (
    //           <div className={`layout`}>
    //               <Sidebar />
    //               <div className="layout_content">
    //                   <div className="layout_content_main">
    //                       <Routess />
    //                   </div>
    //               </div>
    //           </div>
    //       )} ></Route>
    //   </Routes>
    <Routes>
      <Route index element={<Navigate to={"/admin/dashboard"} />} />
      <Route path="dashboard" Component={<Dashboard />} />
      <Route path="customer" Component={<AdminUser />} />
      <Route path="product/create" Component={<AdminCreate />} />
      <Route patch="product/update/infor" Component={<DataFilterProduct />} />
      <Route path="product/update/:id" Component={<AdminUpdate />} />
      <Route path="product/reviewProduct/:id" Component={<ReviewProduct />} />
      <Route path="product" Component={<AdminProduct />} />
      <Route path="order" Component={<AdminOrder />} />
      <Route path="chat" Component={<AppChat />} />
    </Routes>
  );
};

export default Admin;

