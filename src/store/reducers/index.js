import { combineReducers } from 'redux';
import missons from './missions_reducer';
import rokets from './rokets_reducer';

const rootReducer = combineReducers({
  missons,
  rokets,
});

export default rootReducer;
