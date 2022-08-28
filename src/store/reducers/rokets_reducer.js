import * as types from '../types';

const initialState = [];

const roketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_ROKETS}/fulfilled`:
      return action.payload;
    case `${types.ROKETS_RESERVED}`:
      return state.map((roket) => {
        if (roket.id !== action.payload) return roket;
        return { ...roket, reserved: !roket.reserved };
      });
    default:
      return state;
  }
};

export default roketsReducer;
