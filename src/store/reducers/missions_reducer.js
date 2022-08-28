import * as types from '../types';

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
