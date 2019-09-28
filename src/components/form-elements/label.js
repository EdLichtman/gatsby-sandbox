import React from "react"
import PropTypes from "prop-types"

const Label = ({ displayText }) => {
  return (<label>{displayText}</label>)
}

Label.propTypes = {
  displayText: PropTypes.string.isRequired
}

export default Label
