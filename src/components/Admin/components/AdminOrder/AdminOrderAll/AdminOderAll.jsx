import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../../../store/order/OrderAction";
import ListOrder from "../AdminOderUI/ListOrder";

const AdminOrderAll = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.allOrder.order);
    
    useEffect(() => {
        dispatch(getAllOrder());
    }, []);

    return (
        <div>
            {orders && orders.length > 0 ? (
                <ListOrder orders={orders}></ListOrder>
            ) : (
                <h4>Khong co don hang</h4>
            )}
        </div>
    )
}

export default AdminOrderAll;