import { combineReducers, configureStore } from '@reduxjs/toolkit';
import numReducers from './reducers/numbers.reducers'

const reducers = combineReducers({
    numbers: numReducers,
});

export default function storeConfig(){
    return configureStore({reducer: reducers});
}