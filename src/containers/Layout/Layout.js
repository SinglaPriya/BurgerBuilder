import React , { Component} from 'react';
import Auxiliary from '../../hoc/auxiliary'
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state={
        showSideDrawer : true,
    }

    sideDrawerTogglerHandler = () => {this.setState( (prevState) => {
        return {showSideDrawer : !prevState.showSideDrawer}
    })}

    render(){
        return (
            <Auxiliary>
                <Toolbar click={this.sideDrawerTogglerHandler} />
                <SideDrawer show={this.state.showSideDrawer}
                closed = {this.sideDrawerTogglerHandler} />
    
                {/* <div > toolbar, sidedrawer, backdrop</div> */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
    

}

export default Layout;