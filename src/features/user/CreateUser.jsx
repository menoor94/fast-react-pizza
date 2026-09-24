import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const isNameToShort = username.length <= 2 && username.length > 1;
  const isNameValid = username.length > 2;

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isNameValid) return;

    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
      <p className="text-sm md:text-base font-semibold tracking-widest">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="inputs "
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {isNameToShort && (
        <p className="text-red-400 bg-red-100 text-sm p-2 rounded">
          full name should have at least 4 characters
        </p>
      )}
      <div
        className={`${isNameValid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"} transition-opacity duration-700`}
      >
        <Button type="primary">Start ordering</Button>
      </div>
    </form>
  );
}

export default CreateUser;
