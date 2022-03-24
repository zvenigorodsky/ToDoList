const Header = ({ title }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
    </div>
  );
};

Header.defaultProps = {
  title: "To Do List!",
};
export default Header;
