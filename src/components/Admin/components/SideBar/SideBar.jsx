import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { GetAllOrderPendding } from "../../../../store/order/OrderAction";

const Sidebar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { orderPendding } = useSelector((state) => state.allOrder);

    let totalNewOrder
    if (orderPendding) {
        totalNewOrder = orderPendding.length;
    }

    useEffect(() => {
        const getNewOrder = () => {
            dispatch(GetAllOrderPendding())
        }
        getNewOrder()
    },
    [dispatch]);

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <img
                width={98}
                height={30} 
                src="https://levents.asia/wp-content/uploads/2021/10/logo.png" 
                alt="Levents" />
            </div>
            <div className="sidebar-list">
                <Link to="/admin" className="sidebar-list-item">
                    <span>
                        
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;