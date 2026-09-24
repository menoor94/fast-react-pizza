import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-dvh grid grid-rows-[auto_1fr_auto] gap-y-2">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll scrollbar-none">
        <main className="mx-auto ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
export default AppLayout;
