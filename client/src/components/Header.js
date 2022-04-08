import { Outlet } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div >
      <h1 className="Header">{title}</h1>
      <Outlet/>
    </div>
  );
};

Header.defaultProps = {
  title: "To Do List!",
};
export default Header;
