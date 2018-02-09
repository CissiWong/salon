import React from "react"
import { Link } from "react-router-dom"
import header from "../assets/header_img.png"
import statusbar from "../assets/status_bar.png"
import heart from "../assets/heart.png"
import left from "../assets/left.png"
import phone from "../assets/phone.png"
import star from "../assets/star.png"
import staroutline from "../assets/star-outline.png"
import location from "../assets/location.png"
import web from "../assets/web.png"
import line from "../assets/line.png"
import down from "../assets/down.png"

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
      <div className="salonview">
        <header className="salonview-header">
          <img className="statusbar" src={statusbar} alt="" />
          <img className="header_img" src={header} alt="" />
          <div className="left">
            <Link to="/"><img src={left} alt="" /></Link>
          </div>
          <img className="heart" src={heart} alt="" />
          <div className="salonview-title">
            <h1>{this.state.salon.title}</h1>
          </div>
          <div className="rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={staroutline} alt="" />
            <p>(32)</p>
          </div>
        </header>
        <nav>
          <h2>Info</h2>
          <h2>Schema</h2>
        </nav>
        <img className="salonview-line" src={line} alt="" />
        <div className="salonview-container">
          <div className="salonview-address">
            <img src={location} alt="" />
            <p>{this.state.salon.address}, {this.state.salon.postal}</p>
          </div>
          <div className="salonview-time">
            <img className="location" src={location} alt="" />
            <p>{this.state.salon.openinghours}</p>
            <img className="down" src={down} alt="" />
          </div>
          <div className="salonview-phone">
            <img src={phone} alt="" />
            <p>{this.state.salon.phone}</p>
          </div>
          <div className="salonview-web">
            <img src={web} alt="" />
            <p>{this.state.salon.website}</p>
          </div>
          <p>{this.state.salon.text}</p>
        </div>
      </div>
    )
  }
}
