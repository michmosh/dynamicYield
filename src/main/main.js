import React, { Component } from 'react';
import styles from './style.css';
import axios from 'axios';
import {connect} from 'react-redux';
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
        this.state = {
            data : [] , 
            update:false,
            saved :[] 
            
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
       this.props.checkedStorage(playList);
    }

    loadPlayList(){
        this.setState({data : [...this.state.saved] , update:true}) ;
        this.props.loadVideosFromStorage(this.state.saved);
    }

    getData(term){
       axios.get(`${this.props.credetials.apiUrl}/search?part=snippet&maxResults=20&q=${term}&type=video&key=${this.props.credetials.apiKey}`)
        .then(res=>{
            this.setState({data : res.data.items , update:true});
            this.props.loadVideos(this.state.data);
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
                    <Saved  loadPlayList={this.loadPlayList} />
                </div>
                <List update={this.state.update} data={this.state.data} updatePlaylist={this.updatePlaylist} />
                <Messages message={this.state.savedMessage} type={this.state.msgType} />
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
            dispatch({type:'LOADED_VIDEOS' , payload:payload} )
        } ,
        loadVideosFromStorage : function(payload){
            dispatch({type:'LOADED_FROM_STORAGE' , payload:payload} )
        } ,
        checkedStorage : function(payload){
            dispatch({type:'CHECKED_STORAGE' , payload:payload})
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Main);
