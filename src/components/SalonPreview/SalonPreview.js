import React from "react"
import { Link } from "react-router-dom"

// Components
import Rating from '../Rating/Rating';

// Assets
import right from "../../assets/right.png"

// Styling
import './salon-preview.css';

class SalonPreview extends React.Component {
  render() {
    return (
      <div className="preview-container">
        <div className="preview-time">
          <p>12.00</p>
        </div>
        <div className="preview-middle">
          <Link to={`/salon/${this.props.url}`}>
            <h3 className="preview-title">{this.props.title}</h3>
            <Rating rating={this.props.stars} votes={32} />
            <p>{this.props.address}</p>
          </Link>
        </div>
        <div className="preview-right">
          <p>{this.props.price} kr</p>
          <p>30 min</p>
        </div>
        <Link to={`/salon/${this.props.url}`}>
          <div className="preview-img-column">
            <img
              className="preview-arrow-right"
              src={right}
              alt="" />
          </div>
        </Link>
      </div>
    )
  }
}

export default SalonPreview;
