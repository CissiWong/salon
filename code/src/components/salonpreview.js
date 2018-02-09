import React from "react"
import { Link } from "react-router-dom"
import star from "../assets/star.png"
import staroutline from "../assets/star-outline.png"

const data = require("./data.json")

export default class SalonPreview extends React.Component {
  render() {
    return (
      <div>
        <main className="preview-container">
          <div className="preview-time">
            <p>12.00</p>
          </div>
          <Link to={`/salon/${this.props.url}`}>
          <div className="preview-title">
            <h1>{this.props.title}</h1>
          </div>
            <p>{this.props.price} kr</p>
            <div className="preview-rating">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={staroutline} alt="" />
              <p>(32)</p>
            </div>
            <p>{this.props.address}</p>
          </Link>
        </main>
      </div>
    )
  }
}
