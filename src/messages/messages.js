import React from 'react';
import styles from './style.css'
import {connect} from 'react-redux';
const Messages = (props)=>{
    let bgColor;
    switch(props.type){
        case 'success' :
            bgColor = 'green';
            break;
        case 'warning' :
            bgColor = 'orange';
            break;
        case 'error':
            bgColor = 'red';
            break;
        default: bgColor ='green';
    }
    return (
        <div className={styles.messagesWrapper} style={{display:props.show ? 'block' : 'none' , backgroundColor:bgColor}}>
            <p> {props.message} </p>     
        </div>
    );    
}

function mapStateToProps(state ,props){
    return {show:state.show , message:state.message , type:state.msgType}
}

export default connect(mapStateToProps)(Messages);