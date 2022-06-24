import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title,  }) =showAdd> {
//   const [showAdd, setShowAdd] = useState(false);

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color="green"
        text={showAdd ? "Close" : "Add"}
        onClick={() => setShowAdd(!showAdd)}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

export default Header;
