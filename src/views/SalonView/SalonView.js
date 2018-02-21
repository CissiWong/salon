import React from "react";
import PropTypes from 'prop-types';

// Components
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Rating from '../../components/Rating/Rating';

// Assets
import header from "../../assets/header_img.png"
import phone from "../../assets/phone.png"
import location from "../../assets/location.png"
import web from "../../assets/web.png"
import line from "../../assets/line.png"
import down from "../../assets/down.png"

// Data dummy
import { salons as dataSalons } from '../../data/salons.json';

// Styling
import './salon-view.css';

class SalonView extends React.Component {

  // Hinder the component from updating if the id are the same
  shouldComponentUpdate(nextProps, nextState) {
    if ( nextProps.match.params.id === this.props.match.params.id ) {
      return false;
    }
    return true;
  }

  handleOnNavBack = event => {

    event.preventDefault();

    // Use the history prop with the push function we get access to by using React Router
    // to redirect the user back to the list view
    this.props.history.push('/');

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
        <NavigationBar displayBackButton={true} displayHeart={true} onBack={this.handleOnNavBack} />
        <header className="salonview-header">
          <img className="header_img" src={header} alt="" />
          <div className={'salonview-header__container'}>
            <h1 className="salonview-title">{salon.title}</h1>
            <Rating rating={salon.stars} votes={32} />
          </div>
        </header>
        <nav className={'salonview-tabs'}>
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

// These propTypes are inherited from the React Router component <Route />
SalonView.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default SalonView;
