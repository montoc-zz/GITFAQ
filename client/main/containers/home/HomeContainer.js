import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'underscore';
import { hashHistory } from 'react-router';
require('./HomeContainer.scss');

class HomeContainer extends Component {
  static get propTypes() {
    return {
      data: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired,
    };
  }
  componentDidMount() {
    
  }
  test(){
    hashHistory.push('/route')
  }
  render() {
    return(
      <div style={{backgroundColor:'pink'}}
        onClick={this.test.bind(this)}
      > 
        This is home.. 
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    data: _.clone(state.data),
  };
}
export default connect(mapStateToProps)(HomeContainer);
