import React from "react"
import { Link } from "react-router-dom"

export default class SalonPreview extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/salon/${this.props.url}`}>
          <h1>{this.props.title}</h1>
          <p>{this.props.address}</p>
        </Link>
      </div>
    )
  }
}
