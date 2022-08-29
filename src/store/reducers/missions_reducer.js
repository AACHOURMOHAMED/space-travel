import * as types from '../types';

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_MISSIONS}/fulfilled`:
      return action.payload;
    case `${types.MISSIONS_RESERVED}`:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;
