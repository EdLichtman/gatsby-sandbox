import React from "react"
import PropTypes from "prop-types"

const SubmitButton = ({ displayText }) => {
  var text = !!displayText ? displayText : "Submit"
  return (<button type="submit">{text}</button>)
}

SubmitButton.propTypes = {
  displayText: PropTypes.string,
}

export default SubmitButton
