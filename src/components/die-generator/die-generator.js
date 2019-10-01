import React, { Component, Fragment } from "react"

import LoadingComponent from "../form-elements/loading"
import SubmitButton from "../form-elements/submit-button"
import IteratingQuantitySelectList from "../form-elements/iterating-quantity-select-list"
import LabelInput from "../form-elements/label-input"
import "../layout.css"
import StandardForm from "../form-elements/form-types/standard-form"
import Label from "../form-elements/label"
import rollDie from "./die-roller"

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
      dieResults: {

      },
      isLoading: true,
    }
  }
  componentDidMount = () => {
    this.setState({ isLoading: false })
  }

  onSubmit = () => {
    var dieResults = {}

    Object.keys(this.state.dieRequests).forEach(dieRequest => {
      var numberOfRolls = this.state.dieRequests[dieRequest];
      var sidesOfDie = parseInt(dieRequest.substring(1))
      var result = rollDie(sidesOfDie, numberOfRolls)
      dieResults[dieRequest] = result
    })

    this.setState({
      dieResults:dieResults
    })
  }

  handleDieRequestOnChange = event => {
    var name = event.target.name
    var value = event.target.value
    var dieRequests = Object.assign({}, this.state.dieRequests)
    dieRequests[name] = parseInt(value)
    this.setState({
      dieRequests: dieRequests,
    })
  }

  renderSingleInputFormElement = (dieRequest, index) => {
    var dieType = dieRequest.substring(1)
    return (
      <span key={index}>
        <LabelInput label={`${dieType}-sided`}>
          <IteratingQuantitySelectList
            value={this.state.dieRequests[dieRequest]}
            onChange={this.handleDieRequestOnChange}
            name={dieRequest}
            minQuantity={0}
            maxQuantity={10}
          />
        </LabelInput>
      </span>
    )
  }

  renderInputFormElements = () => {
    return Object.keys(this.state.dieRequests).map(this.renderSingleInputFormElement)
  }

  renderSingleOutputFormElement = (dieResult, index) => {
    var results = this.state.dieResults[dieResult]
    var displayText = `The resulting rolls are ${JSON.stringify(results)}`
    return (
      <span key={index}>
        <Label displayText={displayText} lineBreak/>
      </span>
    )
  }

  renderOutputFormElements = () => {
    if (Object.keys(this.state.dieResults).length) {
      return Object.keys(this.state.dieResults).map(this.renderSingleOutputFormElement)
    }
    return (<Fragment/>)
  }

  render = () => {
    if (this.state.isLoading) return <LoadingComponent />
    return (
      <>
        <StandardForm className={"col-sm-6"} name="die-roller-input">
          <h2>Please how many of each die you would like to roll</h2>
          {this.renderInputFormElements()}
          <SubmitButton displayText="Roll Die" onClick={this.onSubmit} />
        </StandardForm>
        <StandardForm className={"col-sm-6"} name="die-roller-results">
          {this.renderOutputFormElements()}
        </StandardForm>
      </>
    )
  }
}

export default DieGenerator
