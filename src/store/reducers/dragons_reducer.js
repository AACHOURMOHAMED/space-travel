import * as types from '../types';

const initialState = [];

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_DRAGONS}/fulfilled`:
      return action.payload;
    case `${types.DRAGONS_RESERVED}`:
      return state.map((dragon) => {
        if (dragon.id === action.payload) {
          return {
            ...dragon,
            reserved: !dragon.reserved,
          };
        }
        return dragon;
      });
    default:
      return state;
  }
};

export default dragonsReducer;
