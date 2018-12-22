import React, { Component } from 'react';
import ls from 'local-storage';
import styles from './style.css';
import {storageObject} from '../config';

class VideoItem extends Component {
    constructor(props){
        super(props);
        this.showSaveIcon = this.showSaveIcon.bind(this);
        this.saveInStorage = this.saveInStorage.bind(this);
        this.state = {
            showIcon : false
        }
    }

    showSaveIcon(){
        this.setState({showIcon : !this.state.showIcon});
    }

    saveInStorage(event){
        event.stopPropagation();
        this.props.saveInStorage(this.props.video);
    }
    
    render() {
        return (
                <div 
                    onClick={()=>{this.props.setSelectedvideo(this.props.video)}} 
                    onMouseEnter={this.showSaveIcon}
                    onMouseLeave={this.showSaveIcon}
                    className={styles.card}
                    style={{  backgroundImage: `url(  ${this.props.video.snippet.thumbnails.medium.url})`,
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'}}>
                    <h3>{this.props.video.snippet.title}</h3>
                    <i  className={`fa fa-clock-o ` + styles.icon } 
                        style={{
                            fontSize:'3em' , 
                            display:this.state.showIcon ? 'inline' : 'none' , 
                            zIndex:'5'}} onClick={(event)=>this.saveInStorage( event , this.props.video )}>
                    </i>
                </div>
        );
    }
}

export default VideoItem;

