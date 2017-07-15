import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';


class TestContainer extends Component {
  componentDidMount() {
    
  }
  render() {
    return(
      <div 
      > 
        This is Test container.. 
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    data: _.clone(state.data),
  };
}
export default connect(mapStateToProps)(TestContainer);