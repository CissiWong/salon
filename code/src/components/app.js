import React from "react"
import data from "./data.json"
import Salon from "./salon.js"

// const data = require("./data.json")

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      salons: data.salons
    }
  }

  render() {
    return (
      <div>
        {this.state.salons.map((data) => {
         return <Salon
           title={data.title} />
         })}
        </div>
    )
  }
}
