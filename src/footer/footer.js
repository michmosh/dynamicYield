import React from 'react';
import './style.css';
const Footer = (props)=>{
        return (
            <footer className="dark-blue" style={{textAlign:'center'}}>
                <p> &copy; { new Date().getFullYear() } {props.appName} </p>
            </footer>
        );
}

export default Footer;
