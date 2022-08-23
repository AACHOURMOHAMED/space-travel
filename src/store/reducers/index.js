import { combineReducers } from 'redux'
import missionsReducer  from './missions_reducer';
import roketsReducer from './rokets_reducer';

const rootReducer = combineReducers({
    missionsReducer,
    roketsReducer
});

export default rootReducer;