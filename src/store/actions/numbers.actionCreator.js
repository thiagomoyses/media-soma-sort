import {MIN_NUM_ALTERED, MAX_NUM_ALTERED} from './actionsType';

export function changeMinNumber(newNumber){
    return {
        type: MIN_NUM_ALTERED,
        payload: newNumber
    }
}

export function changeMaxNumber(newNumber){
    return {
        type: MAX_NUM_ALTERED,
        payload: newNumber
    }
}