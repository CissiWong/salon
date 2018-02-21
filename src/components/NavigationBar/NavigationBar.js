import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Assets
import goldleft from '../../assets/gold-left.png';
import heart from '../../assets/heart.png';

// Styling
import './navigation-bar.css';

class NavigationBar extends PureComponent {

  render() {

    const backButton = this.props.displayBackButton ? <img className="navbar-back" onClick={this.props.onBack} src={goldleft} alt={''} /> : null;
    const heartIcon = this.props.displayHeart ? <img className="navbar-secondary" src={heart} alt="" /> : null;

    return (
      <nav className="navbar">
        {backButton}
        <h2 className="navbar-title">{this.props.title}</h2>
        {heartIcon}
      </nav>
    );
  }

}

NavigationBar.defaultProps = {
  displayBackButton: false,
  displayHeart: false,
  title: '',
  onBack: () => {}
};

NavigationBar.propTypes = {
  displayBackButton: PropTypes.bool,
  displayHeart: PropTypes.bool,
  title: PropTypes.string,
  onBack: PropTypes.func
};

export default NavigationBar;
