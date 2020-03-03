import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = (props) => {
    const controls=[
        {label:"Cheese" , type: "cheese"},
        {label:"Bacon" , type: "bacon"},
        {label:"Meat" , type: "meat"},
        {label:"Salad" , type: "salad"},
    ]
    return(
        <div className={classes.BuildControls}>
            {controls.map(ctrl => (
                <BuildControl 
                label={ctrl.label} 
                key={ctrl.label}
                added={() => props.added(ctrl.type)}
                removed= {() => props.removed(ctrl.type)}
                />
            ))}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.order}>Order Now!</button>
        </div>
    );
}

export default controls;