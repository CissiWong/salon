import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Assets
import starImage from "../../assets/star.png";
import staroutline from "../../assets/star-outline.png";

// Styling
import './rating.css';

class Rating extends PureComponent {

  render() {

    // Create a new array and fill it then check if the index is less then the props.rating to define
    // what svg we shall render
    const stars = new Array(5).fill().map((_, index) => {

      const star = index < this.props.rating ? <img src={starImage} alt={''} /> : <img src={staroutline} alt={''} />;

      return (
        <div key={index} className="rating-star">{star}</div>
      );

    });

    return (
      <div className="rating">
        <div className="rating-stars">
          {stars}
        </div>
        <div className="rating-votes">
          ({this.props.votes})
        </div>
      </div>
    );
  }

}

Rating.defaultProps = {
  rating: 0,
  votes: 0
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired
};

export default Rating;
