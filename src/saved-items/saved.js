import React from 'react';
import styles from './style.css'
import { connect} from 'react-redux';
const Saved =(props)=>{
    return (
        <div className={styles.savedWrapper}>
            <i onClick={props.loadPlayList} className="fa fa-heart">
                <div className={styles.savedBadge}> {props.saved.length}</div>
            </i> 
        </div>
    ); 
}

function mapStateToProps(state ,props){
    return {saved:state.saved}
}

export default connect(mapStateToProps)(Saved);
