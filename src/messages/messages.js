import React from 'react';
import styles from './style.css'

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

export default Messages