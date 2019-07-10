import React from 'react';
import { Spinner } from 'reactstrap';

//Redux
import { connect} from 'react-redux';


const VideoDetail = ({videosState, selectedVideoState}) =>  { 

        if(!videosState) return (<Spinner type="grow" color="light" />) ; 
      
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="frame" className="embed-responsive-item" src={selectedVideoState && selectedVideoState.url}> </iframe>
                </div>
                <div className="details">
                    <div>{selectedVideoState && selectedVideoState.title}</div>
                    <div>{selectedVideoState && selectedVideoState.description}</div>
                </div>
            </div>
        );
    }
    


const mapStateToProps = state => ({
    videosState : state.videosReducers.videos,
    selectedVideoState : state.videosReducers.selectedVideo
})

export default connect(mapStateToProps,) (VideoDetail);