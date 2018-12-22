import React, { Component } from 'react';
import styles from './style.css';
import Video from '../video/video';
import VideoItem from '../video-item/video-item';

class List extends Component {
    constructor(props){
        super(props);
        this.setSelectedvideo = this.setSelectedvideo.bind(this);
        this.saveInStorage = this.saveInStorage.bind(this);
        this.state = {
            data : [],
            update:false,
            selectedVideo : null
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.update !== prevState.update){
          return { data : nextProps.data , update: false};
       }
       else return { update: false};
     }

    setSelectedvideo(video){
        this.setState({selectedVideo : video})
    }

    saveInStorage(item){
      this.props.updatePlaylist(item)
    }
    
    render() {
        return (
            <div className={styles.listWrapper}>
                {
                   this.state.selectedVideo ?  <Video src={this.state.selectedVideo.id.videoId} /> : ''
                }
                {
                    this.state.data.map((item , index)=>{
                        return (
                            <VideoItem 
                                key={item.id.videoId} 
                                video={item}
                                setSelectedvideo={()=>{this.setSelectedvideo(item)}} 
                                saveInStorage={(event)=>{this.saveInStorage( item)}}
                                className={styles.card}
                                style={{  backgroundImage: `url(  ${item.snippet.thumbnails.medium.url})`,
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

export default List;
