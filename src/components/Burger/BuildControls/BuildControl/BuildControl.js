import React from 'react'
import classes from './BuildControl.module.css'

const control = (props) => {
    return (
        <div className={classes.Control}>
            <button className={classes.Less}>-</button>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More}>+</button>
        </div>
    );
}

export default control;