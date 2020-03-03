import React from 'react'
import classes from './BuildControl.module.css'

const control = (props) => {
    return (
        <div className={classes.BuildControl}>
            <button className={classes.Less} onClick={props.removed}>-</button>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.added}>+</button>
        </div>
    );
}

export default control;