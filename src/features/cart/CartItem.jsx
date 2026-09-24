import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decItemQuantity, deleteItem, incItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function deleteHandler() {
    console.log(pizzaId);
    dispatch(deleteItem(pizzaId));
  }

  function decQuanHandler() {
    dispatch(decItemQuantity(pizzaId));
  }

  function incQuanHandler() {
    dispatch(incItemQuantity(pizzaId));
  }

  return (
    <li className="p-2 flex flex-col gap-y-5 ">
      <p className="flex justify-between ">
        <span className="text-yellow-500 font-semibold">{name}</span>
        <span className="text-stone-800 flex justify-between w-16 items-center">
          <Button onClick={decQuanHandler} type="base">
            -
          </Button>{" "}
          {quantity}{" "}
          <Button type="base" onClick={incQuanHandler}>
            +
          </Button>
        </span>
      </p>
      <div className="flex justify-between">
        <p className="text-green-400">{formatCurrency(totalPrice)}</p>
        <Button onClick={deleteHandler} type="smDelete">
          Delete
        </Button>
      </div>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

export default CartItem;
