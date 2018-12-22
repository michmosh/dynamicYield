import React, { Component } from 'react';
import './style.css';
const Header =(props)=>{
    return (
        <header className="dark-blue">
        <div className="app-logo">{props.appName}</div>
        <div className="hamburger-wrapper">
            <div className='hamburger'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </header>
    );
}

export default Header;
