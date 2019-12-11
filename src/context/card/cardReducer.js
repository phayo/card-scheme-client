import { GET_CARD_STATS,
     VERIFY_CARD,
      VERIFY_CARD_ON_ERROR,
      GET_CARD_STATS_ON_ERROR,
      SPINNER
     } from '../types';

export default (state, action) => {
    switch (action.type){
        case GET_CARD_STATS:
            return {
                ...state,
                failure: "success",
                spin: false,
                stats: action.payload,
            }
        case VERIFY_CARD:
            return {
                ...state,
                failure: "success",
                spin: false,
                verify: action.payload,
            }
        case VERIFY_CARD_ON_ERROR:            
            return {
                ...state,
                failure: "failure",
                spin: false,
                verify: action.payload
            }
        case GET_CARD_STATS_ON_ERROR:
            return {
                ...state,
                failure: "failure",
                spin: false,
                stats: action.payload
            }
        case SPINNER:
            return{
                ...state,
                spin: action.payload
            }
        default:
            return state
    }
}