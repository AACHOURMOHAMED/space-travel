
import * as api from '../../api';
import * as actions from '../types'

export const getRokets = () => ({
    type: actions.GET_ROKETS,
    payload: api.getRokets()
})