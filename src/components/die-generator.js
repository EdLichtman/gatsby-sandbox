import React, { Component } from "react"

import LoadingComponent from './form-elements/loading'
import SubmitButton from './form-elements/submit-button'
import IteratingQuantitySelectList from "./form-elements/iterating-quantity-select-list"
import QuestionAnswer from './form-elements/question-answer'
import "./layout.css"
import OnClickForm from "./form-elements/form-types/on-click-form"


class DieGenerator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dieRequests: {
        $2: 0,
        $4: 0,
        $6: 0,
        $8: 0,
        $10: 0,
        $12: 0,
        $20: 0,
      },
      isLoading: true,
    }
    //this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount = () => {
    this.setState({ isLoading: false })
  }

  render = () => {
    if (this.state.isLoading)
      return (
        <LoadingComponent/>
      )
    return (
      <OnClickForm name="die-roller">
        <h2>Please how many of each die you would like to roll</h2>
        {Object.keys(this.state.dieRequests).map((elem, index) => {
          var dieType = elem.substring(1);
          return (
            <span key={index}>
              <QuestionAnswer question={`${dieType}-sided`}>
            <IteratingQuantitySelectList name={`dieType_${dieType}`} maxQuantity={10} />
          </QuestionAnswer>
            </span>
          )
        })}
        <SubmitButton displayText="Roll Die"/>
      </OnClickForm>
    )
  }
}

export default DieGenerator
