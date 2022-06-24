import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, showAdd, setShowAdd }) => {
  //   const [showAdd, setShowAdd] = useState(false);
  const handleClick = () => {
    setShowAdd(!showAdd);
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={() => handleClick()}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

export default Header;
