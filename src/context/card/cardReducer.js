import { GET_CARD_STATS,
     VERIFY_CARD,
      VERIFY_CARD_ON_ERROR,
      GET_CARD_STATS_ON_ERROR
     } from '../types';

export default (state, action) => {
    switch (action.type){
        case GET_CARD_STATS:
            return {
                ...state,
                failure: "success",
                stats: action.payload,
            }
        case VERIFY_CARD:
            return {
                ...state,
                failure: "success",
                verify: action.payload,
            }
        case VERIFY_CARD_ON_ERROR:            
            return {
                ...state,
                failure: "failure",
                verify: action.payload
            }
        case GET_CARD_STATS_ON_ERROR:
            return {
                ...state,
                failure: "failure",
                stats: action.payload
            }
        default:
            return state
    }
}