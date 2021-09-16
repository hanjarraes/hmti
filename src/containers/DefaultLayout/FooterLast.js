import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class FooterLast extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span className="ml-auto">
            <Button size="sm" className="btn-facebook btn-brand icon mr-1 mb-1"><i className="fa fa-facebook"></i></Button>
            <Button size="sm" className="btn-youtube btn-brand icon mr-1 mb-1"><i className="fa fa-youtube"></i></Button>
            <Button size="sm" className="btn-instagram btn-brand icon mr-1 mb-1"><i className="fa fa-instagram"></i></Button>
            <Button size="sm" className="btn-linkedin btn-brand icon mr-1 mb-1"><i className="fa fa-linkedin"></i></Button>
        </span>
      </React.Fragment>
    );
  }
}

FooterLast.propTypes = propTypes;
FooterLast.defaultProps = defaultProps;

export default FooterLast;
