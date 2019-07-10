import React, { Component, Fragment } from 'react';
import { Row } from 'reactstrap';
import VideoList from './../components/VideoList';
import VideoDetail from './../components/VideoDetail';

class SearchVideos extends Component {
    render(){
        return (
            <Fragment>
            <Row>
              <VideoDetail />
              <VideoList />
            </Row>
            </Fragment>
        );
    }
    
};

export default SearchVideos;