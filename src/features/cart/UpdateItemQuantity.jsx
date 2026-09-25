import PropTypes from "prop-types";

import Button from "../../ui/Button";

import { decItemQuantity, incItemQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  function decQuanHandler() {
    dispatch(decItemQuantity(pizzaId));
  }

  function incQuanHandler() {
    dispatch(incItemQuantity(pizzaId));
  }
  return (
    <span className="text-stone-800 flex justify-between w-16 items-center">
      <Button onClick={decQuanHandler} type="base">
        -
      </Button>{" "}
      {quantity}{" "}
      <Button type="base" onClick={incQuanHandler}>
        +
      </Button>
    </span>
  );
}
export default UpdateItemQuantity;

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number,
  quantity: PropTypes.number,
};
