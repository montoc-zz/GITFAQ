import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

const styleConfig = require('../config/styleConfig');

const createRootStyle = styles => ({
  fontFamily: styles.mainFontFamily,
  height: '100%',
  backgroundColor: styles.websiteBackgroundColor,
  overflowY: 'auto',
});

const Root = ({ store, history }) => (<Provider
  store={store}
>
  <div style={createRootStyle(styleConfig)}>
    <Router history={history}>
      {routes}
    </Router>
  </div>
</Provider>);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default Root;
