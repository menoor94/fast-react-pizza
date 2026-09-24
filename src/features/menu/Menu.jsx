import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
// import Button from "../../ui/Button";
// import { useSelector } from "react-redux";

function Menu() {
  const menu = useLoaderData();
  // const cart = useSelector((state) => state.cartReducer.cart);

  return (
    <>
      <ul className="divide-y divide-stone-300">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
      {/* <div
        className={`${cart.length > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}   transition-all duration-700 absolute bottom-5 right-5`}
      >
        <Button to="/cart" type="primary">
          Go to Cart
        </Button>
      </div> */}
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
