import { combineReducers } from 'redux';
import missions from './missions_reducer';
import rokets from './rokets_reducer';
import dragons from './dragons_reducer';

const rootReducer = combineReducers({
  missions,
  rokets,
  dragons,
});

export default rootReducer;
