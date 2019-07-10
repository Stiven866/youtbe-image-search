import { VIDEOS, SELECTED_VIDEO } from './../constants';

const initialState = {
    videos:null,
    selectedVideoState:{
        url:'',
        title:'',
        description:''
    }
};

const videosReducers = ( state = initialState, action ) => {
    switch(action.type){
        case VIDEOS:
            return {
                ...state,
                videos: action.payload
            }
        case SELECTED_VIDEO:
            return {
                ...state,
                selectedVideo: action.payload
            }
        default:
            return state;
    }
}

export default videosReducers;