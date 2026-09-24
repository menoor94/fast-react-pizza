import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const totalCartQuantity = cart.reduce((acc, item) => {
    return acc + Number(item.quantity);
  }, 0);

  const totalCartPrice = cart.reduce((acc, item) => {
    return acc + Number(item.unitPrice * item.quantity);
  }, 0);

  if (!totalCartQuantity) return null;
  return (
    <div className="bg-stone-900 text-white flex justify-between p-3">
      <p className="flex gap-x-3">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link className="" to={"/cart"}>
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
