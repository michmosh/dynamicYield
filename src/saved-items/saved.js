import React, { Component } from 'react';
import styles from './style.css'

const Saved =(props)=>{
    return (
        <div className={styles.savedWrapper}>
            <i onClick={props.loadPlayList} className="fa fa-heart">
                <div className={styles.savedBadge}> {props.saved.length}</div>
            </i> 
        </div>
    ); 
}

export default Saved;
