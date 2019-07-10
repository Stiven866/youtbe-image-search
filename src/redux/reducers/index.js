import { combineReducers } from 'redux';
import videosReducers from './videosReducers';
import serchReduers from './searchReducers';
import imagesReducers from './imagesReducers';

export default combineReducers({
    videosReducers,
    serchReduers,
    imagesReducers
})