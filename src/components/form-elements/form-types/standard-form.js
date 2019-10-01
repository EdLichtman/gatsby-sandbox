import React, { Component } from "react"
import PropTypes from "prop-types"

import "../../layout.css"

class StandardForm extends Component {
  render = () => {
    return (
      <form
        name={this.props.name}
        className={this.className}>
        {this.props.children}
      </form>
    )
  }
}

StandardForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default StandardForm
