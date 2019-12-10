import React, { useReducer } from "react";
import axios from 'axios';
import CardContext from './cardContext';
import cardReducer from './cardReducer';
import { VERIFY_CARD, 
    GET_CARD_STATS, 
    VERIFY_CARD_ON_ERROR,
    GET_CARD_STATS_ON_ERROR
 } from '../types';

const CardState = props => {
    // initial state
    const initialState = {
        verify: {
            success: false,
            payload: {
                scheme: "",
                type: "",
                bank: ""
            }
        },
        stats: {
            success: false,
            start: 0,
            limit: 0,
            size: 0,
            payload: {}
        },
        
        failure: "default",
        
        
    }

    const [state, dispatch] = useReducer(cardReducer, initialState);

    const verifyCard = async(cardNumber) => {
        // call APi
        try{
            const response = await axios.get(`https://card-scheme.herokuapp.com/api/v1/card-scheme/verify/${cardNumber}`);
            
            dispatch({
                type: VERIFY_CARD,
                payload: response.data
            });
        } catch (error){
            dispatch({
                type: VERIFY_CARD_ON_ERROR,
                payload: initialState.verify
            });
            console.log({error});
        }
    }

    const getCardStats = async(start, limit) => {
        try{
            const response = await axios.get(` https://card-scheme.herokuapp.com/api/v1/card-scheme/stats?start=${start}&limit=${limit}`);
            
            dispatch({
                type: GET_CARD_STATS,
                payload: response.data
            });
        } catch (error){
            console.error({error});
            dispatch({
                type: GET_CARD_STATS_ON_ERROR,
                payload: initialState.stats
            });
        }

        
    }

    return (
        <CardContext.Provider 
            value= {{
                failure: state.failure,
                verify: state.verify,
                stats: state.stats,
                verifyCard,
                getCardStats
            }}
        >
            {props.children}
        </CardContext.Provider>
    )
}

export default CardState;