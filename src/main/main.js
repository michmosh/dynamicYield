import React, { Component } from 'react';
import styles from './style.css';
import axios from 'axios';
import ls from 'local-storage';
import Search from '../search/search';
import List from '../list/list';
import {storageObject} from '../config';
import Saved from '../saved-items/saved';
import Messages from '../messages/messages';

class Main extends Component {
    constructor(props){
        super(props);
       
        this.handleInputChnage = this.handleInputChnage.bind(this);
        this.loadPlayList = this.loadPlayList.bind(this);
        this.updatePlaylist = this.updatePlaylist.bind(this);
        this.successSavedMessage = 'Video has been saved for later ';
        this.errorSavedMessage = 'Error - ooppps something went wrong please try again ';
        this.videoExistsSavedMessage = 'Video allready exists in your playlist';
        this.state = {
            data : [] , 
            update:false,
            saved :[] , 
            showMessage : false , 
            savedMessage:'',
            msgType:''
            
        }
    }

    componentDidMount(){
        this.setStorageObject()
    }

    setStorageObject(){
        ls.on(storageObject ,()=>{
        });
        let playList = ls.get(storageObject);
       if( playList === null) {
            ls.set(storageObject , this.state.saved);
       }else{
           this.setState({saved : playList});
       }
    }

    updatePlaylist(video){
        let vidsArray = ls.get(storageObject).filter((element)=>{
            return video.id.videoId === element.id.videoId
        })
       if(vidsArray.length > 0 ){
            this.setState({savedMessage :this.videoExistsSavedMessage , showMessage : true , msgType:'warning' });
       }else{
            try{
                ls.set(storageObject ,[...this.state.saved , video]);
                this.setState({saved : [...this.state.saved , video] ,savedMessage :this.successSavedMessage ,showMessage : true , msgType:'success'});
            }catch(err){
                console.error(err);
                this.setState({savedMessage : this.errorSavedMessage , msgType:'error'})
            }
       }
        setTimeout(()=>{
            this.setState({showMessage : false ,savedMessage :''});
        },1000);
    }

    loadPlayList(){
        this.setState({data : [...this.state.saved] , update:true}) ;
    }

    getData(term){
       axios.get(`${this.props.credetials.apiUrl}/search?part=snippet&maxResults=20&q=${term}&type=video&key=${this.props.credetials.apiKey}`)
        .then(res=>{
            this.setState({data : res.data.items , update:true})
        })
    }
    handleInputChnage(event){
        this.getData(event.target.value);
    }
    render() {
        return (
            <div className="main">
                <div className={styles.serachBarWrapper}>
                    <Search handleInputChnage={this.handleInputChnage} />
                    <Saved saved={this.state.saved} loadPlayList={this.loadPlayList} />
                </div>
                <List update={this.state.update} data={this.state.data} updatePlaylist={this.updatePlaylist} />
                <Messages show={this.state.showMessage} message={this.state.savedMessage} type={this.state.msgType} />
            </div>
        );
    }
}

export default Main;
