import {MIN_NUM_ALTERED, MAX_NUM_ALTERED} from '../actions/actionsType';

const initialState = { min: 7, max: 31 }

export default function numbersReducers(state = initialState, action){
    switch(action.type){
        case MIN_NUM_ALTERED:
            return { ...state, min: action.payload };

        case MAX_NUM_ALTERED:
            return { ...state, max: action.payload }
        
        default:
            return state;
    }
}