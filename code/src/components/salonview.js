import React from "react"
// import data from "./data.json"
// import Salon from "./salon.js"

const data = require("./data.json")

export default class SalonView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      salon: {}
    }
  }

  componentDidMount() {
    console.log(data)
    const salon = data.salons.find(p => (p.id === this.props.match.params.id))

    this.setSalon(salon)
  }

  setSalon = salon => {
    this.setState({
      salon
    })
  }

  render() {
    return (
      <div className="listview-container">
      <h1>{this.state.title}</h1>
      </div>
    )
  }
}
