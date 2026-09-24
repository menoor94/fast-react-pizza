import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.userReducer.username);

  return (
    <div className="text-xs md:text-base uppercase text-stone-800 font-semibold">
      {username}{" "}
    </div>
  );
}
export default Username;
