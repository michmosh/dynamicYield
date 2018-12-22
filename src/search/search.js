import React from 'react';
import styles from './style.css';

const Search =(props)=>{
    return (
        <input className={styles.searchInput} onKeyUp={props.handleInputChnage} type="text" />
    ); 
}

export default Search;
