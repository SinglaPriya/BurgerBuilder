import React , {Component} from 'react';
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/auxiliary'
import Backdrop from '../Backdrop/Backdrop'
import Button from '../Button/Button'

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show!== this.props.show || nextProps.children!== this.props.children;
    }

    componentDidUpdate() {
        console.log('<modal> will update')
    }


    render(){
        return(<Auxiliary>
            <Backdrop show={this.props.show} disable={this.props.modalClose}/>
    
        <div className={classes.Modal}
        style={{
            transform : this.props.show ? 'translateY(0)' : 'translateY(-100vH)',
            opacity : this.props.show ? '1': '0'
        }}>
            {this.props.children}
        </div>
        
        </Auxiliary>)
    }
    
}

export default Modal;