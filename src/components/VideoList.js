import React, { Component} from 'react';
import VideoItem from './VideoItem';
import { Spinner } from 'reactstrap';

//Redux
import { connect} from 'react-redux';
import { fetchTube, selectedVideo } from './../redux/actions/videosActions';


class VideoList extends Component{ 
    componentWillMount(){
        const {fetchTube, search} = this.props;
            fetchTube(search);    
    }

    componentWillReceiveProps(nextProps) {
        const { fetchTube, search } = this.props;
        if(search !== nextProps.search){
            fetchTube(nextProps.search) 
        }
    }
    

    render(){
        const { videosState, selectedVideo, selectedVideoState } = this.props;
        
        if(videosState){
            if(!selectedVideoState){
                selectedVideo(videosState[0]);
            }
        }else{
            return (<Spinner type="grow" color="light" />);
        } 

        const videoItems = videosState.map( video => {
            return (
                <VideoItem 
                    key={video.etag}
                    video={video}/>
            )
        });
        
        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );

    }
};
    
const mapStateToProps = state => ({
    videosState: state.videosReducers.videos,
    selectedVideoState : state.videosReducers.selectedVideo,
    search: state.serchReduers.search
})

export default connect (mapStateToProps, { fetchTube, selectedVideo })(VideoList);