/**
 * form to be sent directly to be hosted with netlify
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const NetlifyForm = ({ children, name }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <form data-netlify="true" 
          name={name}
          method="POST"
          style={{ 
            marginBottom:`15px`
           }}
        >{children}</form>
      </div>
    </>
  )
}

NetlifyForm.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default NetlifyForm
