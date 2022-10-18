import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    numbers: (state, action) => {
        console.log(state, ' ', action);
        return {
            min: 1,
            max: 10
        }
    },
    names: (state, action) => {
        console.log(state, ' ', action);
        return [
            'ana',
            'bia',
            'carlos'
        ]
    }
});

export default function storeConfig(){
    return configureStore({reducer: reducers});
}