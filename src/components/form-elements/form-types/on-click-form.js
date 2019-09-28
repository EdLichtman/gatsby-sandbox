/**
 * form to be sent directly to be hosted with netlify
 */

import React from "react"
import PropTypes from "prop-types"

import "../../layout.css"

const OnClickForm = ({ children, name }) => {
  return (<form name={name}>{children}</form>)
}

OnClickForm.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default OnClickForm
