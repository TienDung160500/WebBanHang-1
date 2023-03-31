import React from "react";
import { Route, Router } from "react-router-dom";
import AdminOrderMenu from "./AdminOderMenu/AdminOrderMenu";
import AdminOrderAll from "./AdminOrderAll/AdminOderAll";

const AdminOrder = () =>{

    return (
        <Router>
            <div className="order">
                <span>Orders</span>
                <AdminOrderMenu></AdminOrderMenu>

                <switch>
                    <Route path="/admin/order" Component={AdminOrderAll}></Route>
                </switch>
            </div>
        </Router>
    )
}

export default AdminOrder;