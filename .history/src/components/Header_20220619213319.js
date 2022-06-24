import Button from "./Button";

import PropTypes from "prop-types";
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" />
      <Button color="red" text="Hello 1" />
      <Button color="blue" text="Hello 2" />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

export default Header;
