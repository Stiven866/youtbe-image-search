import { VIDEOS, SELECTED_VIDEO } from './../constants';
import axios from 'axios';

import { YOUTUBE_URL, YOUTUBE_API_KEY } from './../url_api';



export const fetchTube = (term) => async dispatch => {
        const params = {
                part: 'snippet',
                key: YOUTUBE_API_KEY,
                q: term,
                type: 'video'
        };
      
        let request = await axios.get(YOUTUBE_URL, {params:params});
        dispatch({
                type: VIDEOS,
                payload: request.data.items
        })

}
export const selectedVideo = video => ({
        type: SELECTED_VIDEO,
        payload: {
                url : `https://www.youtube.com/embed/${video.id.videoId}`,
                title : video.snippet.title,
                description : video.snippet.description
        }
});