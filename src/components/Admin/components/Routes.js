import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import AdminOrder from "./AdminOrder/AdminOder";
import AdminCreate from "./AdminProduct/AdminCreate";
import AdminProduct from "./AdminProduct/AdminProduct";
import AdminUpdate from "./AdminProduct/DataFilterProduct/AdminUpdate";
import DataFilterProduct from "./AdminProduct/DataFilterProduct/DataFilterProduct";
import ReviewProduct from "./AdminProduct/ReviewProduct/ReviewProduct";
import AdminUser from "./AdminUser/AdminUser";
import AppChat from "./Appchat/AppChat";

const Routes = () => {
    return (
        <Routes>
           <Route path="/admin" Component={Dashboard}/> 
           <Route path="/admin/customer" Component={AdminUser}/>

           <Route path="admin/product/create" Component={AdminCreate}/>
           <Route patch="/admin/product/update/infor" Component={DataFilterProduct}/>
           <Route path="/admin/product/update/:id" Component={AdminUpdate}/>
           <Route path="/admin/product/reviewProduct/:id" Component={ReviewProduct}/>
           <Route path="/admin/product" Component={AdminProduct}/>

           <Route path="/admin/order" Component={AdminOrder}/>
           <Route path="/admin/chat" Component={AppChat}/>
        </Routes>
    )
}

export default Routes;