import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    numbers: (state, action) => {
        // console.log(state, ' ', action);
        return {
            min: 7,
            max: 31
        }
    }
});

export default function storeConfig(){
    return configureStore({reducer: reducers});
}