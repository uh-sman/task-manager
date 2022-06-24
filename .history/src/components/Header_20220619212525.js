import PropTypes from "prop-types";
const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};

export default Header;