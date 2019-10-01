import React from "react"
import PropTypes from "prop-types"
import SelectListOption from "./select-list-option"

const IteratingQuantitySelectList = ({ name, onChange, minQuantity = 1, maxQuantity }) => {
  var totalIterations = maxQuantity + 1 - minQuantity

  return (
    <select onChange={onChange} name={name}>
      {Array.from(Array(totalIterations).keys()).map(function(elem, index) {
        var quantity = (elem + minQuantity).toString()
        return (
          <React.Fragment key={index}>
            <SelectListOption
              index={index.toString()}
              displayText={quantity}
              value={quantity}
            />
          </React.Fragment>
        )
      })}
    </select>
  )
}

IteratingQuantitySelectList.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minQuantity: PropTypes.number,
  maxQuantity: PropTypes.number.isRequired,
}

export default IteratingQuantitySelectList
