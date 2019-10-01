import React from "react"
import PropTypes from "prop-types"

const Label = ({ displayText, lineBreak }) => {
  return (
  <>
  <label>{displayText}</label>
  {lineBreak && <br/>}
  </>)
}

Label.propTypes = {
  displayText: PropTypes.string.isRequired,
  lineBreak: PropTypes.bool
}

export default Label
