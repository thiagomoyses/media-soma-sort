import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({
    numbers: (state, action) => {
        switch(action.type){
            case 'MIN_NUM_ALTERED':
                return { ...state, min: action.payload };

            case 'MAX_NUM_ALTERED':
                return { ...state, max: action.payload }
            
            default:
                return { min: 7, max: 31 };
        }
    }
});

export default function storeConfig(){
    return configureStore({reducer: reducers});
}