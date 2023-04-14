import React from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate, Routes } from "react-router-dom";
// import Routess from "./components/Routes";
// import Sidebar from "./components/SideBar/SideBar";
import "./Admin.css"
import Dashboard from "./pages/Dashboard";
// import AdminUser from "./components/AdminUser/AdminUser";
// import AdminCreate from "./components/AdminProduct/AdminCreate";
// import DataFilterProduct from "./components/AdminProduct/DataFilterProduct/DataFilterProduct";
// import AdminUpdate from "./components/AdminProduct/DataFilterProduct/AdminUpdate";
// import ReviewProduct from "./components/AdminProduct/ReviewProduct/ReviewProduct";
// import AdminProduct from "./components/AdminProduct/AdminProduct";
// import AdminOrder from "./components/AdminOrder/AdminOder";
// import AppChat from "./components/Appchat/AppChat";

const Admin = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfor} = userSignin;
    const navigate = useNavigate();

    if (!userInfor || !userInfor.isAdmin ) {
        navigate("/")
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
          <Route index element={<Dashboard/>} />
           {/* <Route path="/admin/customer" Component={AdminUser} />
        // <Route path="admin/product/create" Component={AdminCreate} />
        // <Route
        //   patch="/admin/product/update/infor"
        //   Component={DataFilterProduct}
        // />
        // <Route path="/admin/product/update/:id" Component={AdminUpdate} />
        // <Route
        //   path="/admin/product/reviewProduct/:id"
        //   Component={ReviewProduct}
        // />
        // <Route path="/admin/product" Component={AdminProduct} />
        // <Route path="/admin/order" Component={AdminOrder} />
        // <Route path="/admin/chat" Component={AppChat} /> */}
         </Routes>
    );
}

export default Admin;