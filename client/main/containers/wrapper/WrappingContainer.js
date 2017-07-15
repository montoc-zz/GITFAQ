import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const _ = require('underscore');

const WrappingContainer = ({ children }) => (<div style={{ height: '100%' }}>
  {children}
</div>);
WrappingContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(WrappingContainer);
