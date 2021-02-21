import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://uis.ac.id/">Ibnu Sina Batam</a> &copy; HMTI 2021</span>
        <span className="ml-auto">Powered by <a href="https://www.linkedin.com/in/muhammad-hanjarraes-a518441aa/">Muhammad Hanjarraes</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
