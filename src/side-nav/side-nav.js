import React, { Component } from 'react';
import styles from './style.css';
import { Link } from "react-router-dom";
const Sidenav =(props)=> {
    return (
        <div className="side-nav dark-blue">
            <ul>
                {
                props.links.map((link , index)=>{
                    return (
                        <Link className={styles.sideNavLink} key={index} to={link.path}>
                            <li > 
                                <i className={link.icon} style={{marginRight:'1rem'}}></i> {link.name}
                            </li>
                        </Link>
                    )
                })
                }
            </ul>
        </div>
    );
    
}

export default Sidenav;
