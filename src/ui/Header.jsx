import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="h-10 flex bg-yellow-400 p-2 px-10 justify-between items-center">
      <Link
        className="links uppercase tracking-widest text-sm md:text-base"
        to={""}
      >
        Fast React Pizza Co
      </Link>
      <SearchOrder />
      {/* <p>Order Now </p> */}
      <Username />
    </div>
  );
}
export default Header;
