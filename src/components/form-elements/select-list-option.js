import React from "react"
import PropTypes from "prop-types"

const SelectListOption = ({ index, displayText, value }) => {
  return (
    <option key={index} value={value}>
      {displayText}
    </option>
  )
}

SelectListOption.propTypes = {
  index: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default SelectListOption
