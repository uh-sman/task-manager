import React from "react";
import PropTypes from "prop-types";
const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: "green" }} className="btn">
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
