import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import data from './reducerFuncs/dataReducer';

const reducerObject = {
  routing,
  data,
};
const rootReducer = combineReducers(reducerObject);
export default rootReducer;
