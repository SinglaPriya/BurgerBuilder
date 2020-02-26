import React from 'react';
import Aux from '../../hoc/aux'
import classes from './Layout.module.css'

const Layout = (props) => {

    return (
        <Aux>
            <div className={classes.Content}> toolbar, sidedrawer, backdrop</div>
            <main>
                {props.children}
            </main>
        </Aux>
    )

}

export default Layout;