import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ onClick, children, disabled, to, type }) {
  const base =
    "text-stone-800 rounded-full  cursor-pointer hover:scale-105 transition active:scale-100 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 font-bold";

  // const notActive = "opacity-50 cursor-not-allowed";

  const styles = {
    base: base,
    primary: base + " bg-yellow-400 hover:bg-yellow-300 py-2 px-3   ",
    delete: base + " bg-red-400 hover:bg-red-300 py-2 px-3",
    small: base + " bg-green-400 hover:bg-green-300 py-1 px-3  text-xs ",
    smDelete: base + " bg-red-400 hover:bg-red-300 py-1 px-3 text-xs uppercase",
  };

  if (to)
    return (
      <Link onClick={onClick} className={`${styles[type]} `} to={to}>
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      className={`${styles[type]} `}
      disabled={disabled}
    >
      {children}{" "}
    </button>
  );
}
Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string,
  type: PropTypes.string,
  isAcite: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
