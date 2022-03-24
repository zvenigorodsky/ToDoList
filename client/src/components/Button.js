import PropTypes from "prop-types";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

const Button = ({ color, onClick, text }) => {
  return (
    <>
      <button
        onClick={onClick}
        style={{ background: color }}
        className="AddButton"
      >
        {text === "open" ? <CgChevronDown /> : <CgChevronUp />}
      </button>
    </>
  );
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
