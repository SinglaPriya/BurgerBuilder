import React from 'react'

import burgerLogo from '../../../assets/logo.png'
import classes from './Logo.module.css'

const logo= (props) =>(
    <div className={classes.Logo} style={{height : props.height}}>
        <img src={burgerLogo} ></img>
    </div>
)

export default logo