import { combineReducers } from 'redux';
import missions from './missions_reducer';
import rokets from './rokets_reducer';

const rootReducer = combineReducers({
  missions,
  rokets,
});

export default rootReducer;
