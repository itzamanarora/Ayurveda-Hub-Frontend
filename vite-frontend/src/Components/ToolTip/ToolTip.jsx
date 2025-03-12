import PropTypes from "prop-types";
import "./ToolTip.css";

const ToolTip = ({ children, text, position = "top", showArrow = true }) => {
  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip-text tooltip-${position}`}>
        {text}
        {showArrow && <div className={`tooltip-arrow tooltip-${position}`}></div>}
      </div>
    </div>
  );
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  showArrow: PropTypes.bool,
};

export default ToolTip;
