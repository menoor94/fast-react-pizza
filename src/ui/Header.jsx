import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <SearchOrder />
      <Link to={""}>Fast Pizza React Co</Link>
    </div>
  );
}
export default Header;
