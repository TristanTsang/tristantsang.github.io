import React from "react";
import PropTypes from "prop-types";
function Title(props) {
  const title = {
    paddingTop: "10%",
    fontSize: "2.5rem",
    letterSpacing: "+5px",
    fontWeight: "bold",
    color: props.color,
    fontFamily: "Inter Tight",
    textAlign: "center",
  };

  return <div style={title}>{props.text}</div>;
}

Title.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Title;
