import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../store/cart/cartSlice";
import "./CartItem.css";

const CartItem = ({ id, item, quantity = 0 }) => {
  const dispatch = useDispatch();
  // const [loaded, setLoaded] = useState(false);
  console.log("item", item);

  const cart = useSelector((state) => state.cart.cart || []);
  console.log("cart", cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      const price = Number(item?.price?.split(" ")[0].replace(",", "")) || 0;

      totalQuantity += item.quantity;
      totalPrice += price * item.quantity;
    });
    return { totalQuantity, totalPrice };
  };

  return (
    <>
      <div className="CartItem_container">
        <div className="cart-item">
          {/* {!loaded && ( */}

          <img
            src={item.image}
            alt="product"
            // onLoad={() => setLoaded(true)}
            // style={{display: loaded ? "block" : "none"}}
            width={300}
            height={300}
          />
          {/* )} */}

          <div className="cart-product-item-infor">
            <h3>{item.name}</h3>
            <div className="cart-product-item-infor2">
              <p>Kích cỡ SIZE 2</p>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
              <p>{quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
            </div>
          </div>
        </div>

        <div className="cart-item">
          <div className="cart-price-container">
            <div className="c-price-container">
              <p>Tạm tính</p>
              <p>
                {Number(item?.price?.split(" ")[0].replace(",", "")) * item.quantity}{" "}
                đ
              </p>
            </div>

            <div className="cart-total-order">
              <div className="c-total-order">
                <div>Tổng</div>
                <>{getTotal().totalPrice} đ</>
                {/* <strong>{getTotal().totalPrice} đ</strong> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
