import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((data) => data.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex justify-center">
      <div>
        <button
          onClick={handleClearCart}
          className="border border-black rounded-lg text-white bg-black"
        >
          Clear cart
        </button>
      </div>

      <div className=" w-6/12">
        <ItemList itemList={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
