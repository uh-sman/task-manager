import React from "react";

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

export default Button;
