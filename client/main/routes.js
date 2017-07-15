import React from 'react';
import { Route } from 'react-router';
import HomeContainer from './containers/home/HomeContainer';
import WrappingContainer from './containers/wrapper/WrappingContainer';
import TestContainer from './containers/home/TestContainer';
export default <Route path="" component={WrappingContainer}>
  <Route path="/" component={HomeContainer} />
  <Route path="/route" component={TestContainer} />
</Route>;
