import React from "react"
import PropTypes from "prop-types"
import Label from './label'

const QuestionAnswer = ({ question, children }) => {
  return (
    <>
      <p>
        <Label displayText={question}/>
        {children}
      </p>
    </>
  )
}

QuestionAnswer.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default QuestionAnswer
