import React from "react"
import { Link } from "react-router-dom"

// Assets
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

// Data dummy
import { salons as dataSalons } from '../data/salons.json';

export default class SalonView extends React.Component {

  // Don't update (rerender) the component if the params are the same as before
  // @see https://reactjs.org/docs/react-component.html#shouldcomponentupdate
  shouldComponentUpdate( nextProps, nextState ) {

    if ( nextProps.match.params.id === this.props.match.params.id ) {
      return false;
    }

    return true;

  }

  render() {

    // Find the salon (fallbacks to undefined if not found)
    const salon = dataSalons.find(sal => sal.id === this.props.match.params.id);

    // Return null if the .find returns undefined.
    // Should in reality be a "sorry something went wrong" screen.
    if ( !salon ) {
      return null;
    }

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
            <h1>{salon.title}</h1>
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
            <p>{salon.address}, {salon.postal}</p>
          </div>
          <div className="salonview-time">
            <img className="location" src={location} alt="" />
            <p>{salon.openinghours}</p>
            <img className="down" src={down} alt="" />
          </div>
          <div className="salonview-phone">
            <img src={phone} alt="" />
            <p>{salon.phone}</p>
          </div>
          <div className="salonview-web">
            <img src={web} alt="" />
            <p>{salon.website}</p>
          </div>
          <div className="salonview-text">
            <p>{salon.text}</p>
          </div>
        </div>
      </div>
    )
  }
}
