import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const username = useSelector((state) => state.userReducer.username);
  const dispatch = useDispatch();

  function clearCartHandler() {
    dispatch(clearCart());
  }

  return (
    <div>
      <div className="container p-1 w-full flex flex-col gap-y-3  items-center">
        <h2 className="font-semibold">Your cart, {username}</h2>
        <ul className="w-full md:w-2/3  divide-y divide-stone-200 border-b border-stone-200 ">
          {cart.map((item) => (
            <CartItem key={item.pizzaId} item={item} />
          ))}
        </ul>

        <div className=" flex gap-x-2 w-full  md:w-2/3">
          <Button type="primary" to="/order/new">
            Order pizzas
          </Button>
          <Button onClick={clearCartHandler} type="delete">
            Clear cart
          </Button>
        </div>
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>
    </div>
  );
}

export default Cart;
