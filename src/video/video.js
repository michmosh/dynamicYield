import React, { Component } from 'react';
import styles from './style.css';

class Video extends Component {
    constructor(props){
        super(props);
        this.state = {
            src : props.src
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.src !== prevState.src) this.setState({src:this.props.src})
    }

    render() {
        return (
            <div className={styles.video}>
               <iframe src={`https://www.youtube.com/embed/${this.state.src}`} allow="autoplay; fullscreen" title="video"></iframe>
            </div>
           
        );
    }
}

export default Video;
