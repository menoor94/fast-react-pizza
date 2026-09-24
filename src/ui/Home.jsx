import Button from "./Button";
import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const username = useSelector((state) => state.userReducer.username);

  return (
    <div className=" w-full flex justify-center items-center text-center flex-col gap-y-10 pt-20 ">
      <h1 className="text-3xl md:text-4xl text-stone-800 ">
        The best pizza.
        <br />
        <span className="text-2xl md:text-3xl text-yellow-500 ">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to="/menu">
          Open Menu
        </Button>
      )}
    </div>
  );
}

export default Home;
