import React from "react"
import PropTypes from "prop-types"
import SelectListOption from "./select-list-option"

const IteratingQuantitySelectList = ({ name, minQuantity, maxQuantity }) => {
  var minimum = !!minQuantity ? minQuantity : 1
  var totalIterations = maxQuantity + 1 - minimum

  return (
    <select name={name}>
      {Array.from(Array(totalIterations).keys()).map(function(elem, index) {
        var quantity = (elem + minimum).toString()
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
  minQuantity: PropTypes.number,
  maxQuantity: PropTypes.number.isRequired,
}

export default IteratingQuantitySelectList
