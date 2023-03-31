import { useDispatch } from "react-redux";
import { createOrderGhn } from "../../../../../store/Ghn/GhnAction";
import { deleteOrder, getAllOrder, ShippingOrder } from "../../../../../store/order/OrderAction";
import { formatDateOrderPaypal, formatPrice } from "../../../../../utils";

const Order = (props) => {
    const { order } = props;
    const dispatch = useDispatch()

    const { 
        orderItems,
        totalPrice,
        paymentMethod,
        cancelOrder,
        shippingAddress,
        status,
        paymentResult,
    } = order;

    const handleShippingOrder = async (order) => {
        await dispatch (createOrderGhn(order._id));
        await dispatch (ShippingOrder(order._id));

        dispatch (getAllOrder());
    };

    const handleDeleteOrder = async (order) => {
        await dispatch (deleteOrder(order._id))
        dispatch (getAllOrder())
    }

    return (
        <>
        <div className="order-list">
            <div className="order-list-items">
                {orderItems.map((item) => (
                    <div className="order-items-item">
                        <span className="img">
                            <img src={item.image} alt="" />
                        </span>
                        <span className="qty">Qty: {item.qty}</span>
                        <span className="name">{item.name}</span>
                        <span className="price">{formatPrice(item.salePrice)}</span>
                    </div>
                ))}
            </div>
            <div className="totalPrice">
                <span>Tong tien: {formatPrice(totalPrice)}</span>
            </div>
            <div className="order-infor">
                <div className="order-infor-address">
                    <b>Dia chi: </b>{" "}
                    {shippingAddress.name},{" "}
                    {shippingAddress.province}, {shippingAddress.distrct},{" "}
                    {shippingAddress.ward}, {shippingAddress.detail},{" "}
                    {shippingAddress.phone}
                </div>
            </div>

            {paymentResult ? (
                <div className="order-payment-check">
                    Paid: {formatDateOrderPaypal(paymentResult.update_time)}
                </div>
            ) : ("")}

            <div className="order-bottom">
                {status === "shipping" ? (
                    <div className="order-status">
                        <span>
                            Da xac nhan{" "}
                            {paymentMethod === "payOnline" ? (
                                <span>& Da thanh toan</span>
                            ) : ("")}
                        </span>
                    </div>
                ) : ("")}

                <div className="order-button">
                    {status === "pending"  && cancelOrder === false ? (
                        <>
                        <button 
                        className="shipping"
                        onClick={() => handleShippingOrder(order)}>
                            Xac nhan don hang
                            </button></>
                    ) : ("")}

                    {
                        cancelOrder === true ? (<>
                        <span>Khach yeu cau huy don hang</span>
                        <button 
                        className="shipping"
                        onClick={() => handleDeleteOrder(order)}>
                            Huy don
                            </button>
                            </>) : ""
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Order;