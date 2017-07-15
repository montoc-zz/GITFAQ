import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './containers/Root';
import createStore from './store/createStore';

injectTapEventPlugin();
const store = createStore();
const history = syncHistoryWithStore(hashHistory, store);
render(<Root store={store} history={history} />,
  document.getElementById('root')); // eslint-disable-line global-require, no-undef
