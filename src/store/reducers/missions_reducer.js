import * as actions from '../types'

const initialState = []

const missionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.GET_MISSIONS:
            return [...state , ...action.payload] 
        default:
            return state
    }
}

export default missionsReducer;
