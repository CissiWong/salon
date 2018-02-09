import React from "react"
import { Link } from "react-router-dom"
import star from "../assets/star.png"
import staroutline from "../assets/star-outline.png"
import right from "../assets/right.png"

const data = require("./data.json")

export default class SalonPreview extends React.Component {
  render() {
    return (
      <div>
        <main className="preview-container">
          <div className="preview-time">
            <p>12.00</p>
          </div>
          <div className="preview-middle">
            <Link to={`/salon/${this.props.url}`}>
              <h3 className="preview-title">{this.props.title}</h3>
              <span className="preview-rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={staroutline} alt="" />
                <p>(32)</p>
              </span>
              <p>{this.props.address}</p>
            </Link>
          </div>
          <div className="preview-right">
            <p>{this.props.price} kr</p>
              <p>30 min</p>
          </div>
          <div className="preview-img-column">
            <img
              className="preview-arrow-right"
              src={right}
              alt="" />
          </div>
        </main>
      </div>
    )
  }
}
