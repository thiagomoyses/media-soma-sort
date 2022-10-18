const initialState = { min: 7, max: 31 }

export default (state = initialState, action) => {
    switch(action.type){
        case 'MIN_NUM_ALTERED':
            return { ...state, min: action.payload };

        case 'MAX_NUM_ALTERED':
            return { ...state, max: action.payload }
        
        default:
            return state;
    }
}