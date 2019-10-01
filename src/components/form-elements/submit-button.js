import React from "react"
import PropTypes from "prop-types"



const SubmitButton = ({ displayText, onClick }) => {
  var text = !!displayText ? displayText : "Submit"
  return (<button type="button" onClick={() => onClick()}>{text}</button>)
}

SubmitButton.propTypes = {
  displayText: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default SubmitButton
