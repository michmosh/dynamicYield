import React from 'react';

const Footer = (props)=>{
        return (
            <footer className="dark-blue" style={{textAlign:'center'}}>
                <p> &copy; { new Date().getFullYear() } {props.appName} </p>
            </footer>
        );
}

export default Footer;
