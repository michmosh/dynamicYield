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
import { actions } from '../redux/actions';

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
        let playList = ls.get(storageObject);
        if(playList === null) {
            ls.set(storageObject , this.state.saved); // set empty array in storage if none exists 
            playList = [];
        }
        this.props.checkedStorage( playList);
    }

    loadPlayList(){
        this.props.loadVideosFromStorage([...this.state.saved]);
    }

    getData(term){
       axios.get(`${this.props.credetials.apiUrl}/search?part=snippet&maxResults=20&q=${term}&type=video&key=${this.props.credetials.apiKey}`)
        .then(res=>{
            this.props.loadVideos(res.data.items);
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
                <List />
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
            dispatch(actions.loadedVideos(payload));
        } ,
        loadVideosFromStorage : function(payload){
            dispatch(actions.loadedFromStorage(payload));
        } ,
        checkedStorage : function(payload){
            dispatch(actions.checkedStorage(payload));
        }
    }
}
export default connect(mapStateToProps , mapDispatchToProps)(Main);
