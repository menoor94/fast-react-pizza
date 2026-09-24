import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LinkButton({ to, children }) {
  const navigate = useNavigate();
  const className =
    "text-blue-600 hover:opacity-75 hover:underline transition cursor-pointer inline";

  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        <span>&larr;</span> Go back
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}{" "}
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default LinkButton;
