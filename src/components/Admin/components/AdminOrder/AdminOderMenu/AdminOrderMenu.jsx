import React from "react";
import { Link } from "react-router-dom";

const AdminOrderMenu = () => {
    return (
        <div className="order-menu">
            <Link to="/admin/dashboard/order">All Orders</Link>
        </div>
    );
}

export default AdminOrderMenu;