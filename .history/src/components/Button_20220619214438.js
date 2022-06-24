import React from "react";
import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: "green" }}
      onClick={onClick}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};
Button.prototype = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
