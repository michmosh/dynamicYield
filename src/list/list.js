import React, { Component } from 'react';
import styles from './style.css';
import Video from '../video/video';
import VideoItem from '../video-item/video-item';
import {connect} from 'react-redux';
import {actions} from '../redux/actions/index';
class List extends Component {
    constructor(props){
        super(props);
        this.setSelectedvideo = this.setSelectedvideo.bind(this);
        this.state = {
            data : props.data,
            update:false,
            selectedVideo : null
        }
    }

    setSelectedvideo(video){
        this.setState({selectedVideo : video})
    }

    render() {
        return (
            <div className={styles.listWrapper}>
                {
                   this.state.selectedVideo ?  <Video src={this.state.selectedVideo.id.videoId} /> : ''
                }
                {
                    this.props.data.map((item , index)=>{
                        return (
                            <VideoItem 
                                key={item.id.videoId} 
                                video={item}
                                setSelectedvideo={()=>{this.setSelectedvideo(item)}} 
                                saveInStorage={(event)=>{this.saveInStorage( item)}}
                                className={styles.card}
                                style={{  backgroundImage: `url( ${item.snippet.thumbnails.medium.url} )`,
                                          backgroundPosition: 'center center',
                                          backgroundSize: 'cover',
                                          backgroundRepeat: 'no-repeat'}} />
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state ,props){
    return state
}

function mapDispatchToProps(dispatch ,props){
    return {
        loadVideos: function (payload){
            dispatch(actions.loadedVideos(payload));
        } 
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(List);
// export default List;
