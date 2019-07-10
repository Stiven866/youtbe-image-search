import React from 'react';

import { connect} from 'react-redux';
import { selectedVideo } from './../redux/actions/videosActions';

const VideoListItem = ({video, selectedVideo}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li 
            onClick={() => {
                selectedVideo(video)
            }}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt={video.snippet.title}/>
                </div>
            
            <div className="media-body">
                <div className="mx-2 media-heading">{video.snippet.title}</div>
            </div>
            </div>
        </li>
    );
};

const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, { selectedVideo }) (VideoListItem);