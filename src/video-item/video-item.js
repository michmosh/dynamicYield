import React, { Component } from 'react';
import styles from './style.css';
import ls from 'local-storage';
import {storageObject} from '../config';
import {connect} from 'react-redux';
class VideoItem extends Component {
    constructor(props){
        super(props);
        this.showSaveIcon = this.showSaveIcon.bind(this);
        this.saveInStorage = this.saveInStorage.bind(this);
        this.successSavedMessage = 'Video has been saved for later ';
        this.errorSavedMessage = 'Error - ooppps something went wrong please try again ';
        this.videoExistsSavedMessage = 'Video allready exists in your playlist';
        this.state = {
            showIcon : false
        }
    }

    showSaveIcon(){
        this.setState({showIcon : !this.state.showIcon});
    }

    saveInStorage(event){
        event.stopPropagation();
        let vidsArray = ls.get(storageObject).filter((element)=>{return this.props.video.id.videoId === element.id.videoId})
        let msgType, 
            message;

       if(vidsArray.length > 0 ){
            msgType = 'warning';
            message = this.videoExistsSavedMessage;
            return this.props.showMessage({msgType , message})
       }else{
            try{
                ls.set(storageObject ,[...ls.get(storageObject) , this.props.video]);
                msgType = 'success';
                message = this.successSavedMessage;
            }catch(err){
                msgType = 'error';
                message = this.errorSavedMessage;
                return this.props.showMessage({msgType , message})
            }
       }
       this.props.addVideo({video:this.props.video , msgType , message});
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

function mapStateToProps(state ,props){
    return state
}

function mapDispatchToProps(dispatch ,props){
    return {
        addVideo : function(payload){
            dispatch({type:"ADD_VIDEO" ,payload: payload})
        },
        showMessage : function(payload){
            dispatch({type:'SHOW_MESSAGE' , payload:payload})
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(VideoItem);

