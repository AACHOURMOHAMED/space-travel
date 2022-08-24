import * as actions from '../types';

const initialState = [];

const roketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${actions.GET_ROKETS}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default roketsReducer;
