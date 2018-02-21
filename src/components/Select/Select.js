import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styling
import './select.css';

class Select extends PureComponent {

  render() {
    return (
      <div className="custom-select">
        <select onChange={this.props.onChange} defaultValue={''}>
          <option value={''}>Välj priskategori</option>
          <option value={0}>250-500 kr</option>
          <option value={1}>500-700 kr</option>
          <option value={2}>700-1000 kr</option>
        </select>
      </div>
    );
  }
}


Select.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Select;
