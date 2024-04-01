import React from "react";
import PropTypes from "prop-types";
function Text(props) {
  const text = {
    fontSize: "1.25rem",
    color: props.color,
    fontFamily: "Inter Tight",
    textAlign: "center",
  };

  return <div style={text}>{props.text}</div>;
}

Text.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Text;
