import React from "react"
import PropTypes from "prop-types"
import Label from './label'

const LabelInput = ({ label, children }) => {
  return (
    <>
        <Label displayText={label}/>
        {children}
        <br/>
    </>
  )
}

LabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default LabelInput
