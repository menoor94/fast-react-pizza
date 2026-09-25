import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incItemQuantity } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const itemQuantity = cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

  function clickHandler() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    const isAddedToCart = cart.find((item) => item.pizzaId === newItem.pizzaId);
    if (isAddedToCart) return dispatch(incItemQuantity(isAddedToCart.pizzaId));

    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-5 leading-7 p-2">
      <img
        className={`h-32 ${soldOut ? "grayscale opacity-70" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="w-full">
        <p className="text-xl text-yellow-500">{name}</p>
        <p className="text-stone-800 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="flex justify-between items-center pt-5">
          {!soldOut ? (
            <p className="text-green-500 text-sm">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-red-400  text-sm">Sold out</p>
          )}

          <div className="flex flex-col items-center">
            {itemQuantity !== 0 && (
              <UpdateItemQuantity pizzaId={id} quantity={itemQuantity} />
            )}
            <Button onClick={clickHandler} type="small" disabled={soldOut}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

MenuItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    unitPrice: PropTypes.number,
    ingredients: PropTypes.array,
    soldOut: PropTypes.bool,
    imageUrl: PropTypes.string,
  }),
};

export default MenuItem;
