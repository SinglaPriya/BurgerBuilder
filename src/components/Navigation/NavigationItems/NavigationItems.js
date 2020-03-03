import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const navaigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem target="/" active> BurgerBuilder </NavigationItem>
        <NavigationItem target="/"> CheckOut </NavigationItem>

    </ul>
)

export default navaigationItems