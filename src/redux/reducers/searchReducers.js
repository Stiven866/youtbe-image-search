import { SEARCH } from './../constants';

const initialState = {
    search:'cafe'
}


const searchReducers = (state = initialState, action) => {
    switch(action.type){
        case SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
 
    }
}

export default searchReducers;
