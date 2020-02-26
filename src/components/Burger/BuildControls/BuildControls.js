import React from 'react'
import classes from './BuildControl.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = (props) => {
    const controls=[
        {label:"Cheese" , type: "cheese"},
        {label:"Bacon" , type: "bacon"},
        {label:"Meat" , type: "meat"},
        {label:"Salad" , type: "salad"},
    ]
    return(
        <div className={classes.Controls}>
            {controls.map(ctrl => (
                <BuildControl label={ctrl.label} key={ctrl.label}/>
            ))}
        </div>
    );
}

export default controls;