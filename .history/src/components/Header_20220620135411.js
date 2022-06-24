import Button from "./Button";
import PropTypes from "prop-types";
const Header = ({ title, onAdd, showAdd }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

export default Header;
