import { IMAGES } from './../constants';

const initialState = {
    images:{
        hits: [],
        totlaHits:1
    }

}

const imagesReducers = (state = initialState, action) => {
    switch(action.type){
        case IMAGES:
            return{
                ...state,
                images: action.payload,
            }
        default:
            return state
    }
}

export default imagesReducers;