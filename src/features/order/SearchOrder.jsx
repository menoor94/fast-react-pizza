import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/3">
      <input
        className="w-32 sm:w-52 xl:w-96 rounded-full  outline-none px-2 bg-yellow-100  transition-all focus:w-full focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        type="search"
        value={query}
        placeholder="Search order"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
export default SearchOrder;
