import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

import Button from "../../ui/Button";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  function deleteHandler() {
    console.log(pizzaId);
    dispatch(deleteItem(pizzaId));
  }

  return (
    <li className="p-2 flex flex-col gap-y-5 ">
      <p className="flex justify-between ">
        <span className="text-yellow-500 font-semibold">{name}</span>
        <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity} />
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
