import Modal from '../components/UI/Modal/Modal'
import React, { Component } from 'react'
import Auxiliary from './auxiliary'

const withErrorHandler = (WrappedContainer, axios) => {
    return class extends Component {

        state= {error : null}

        constructor(){
            super();
            this.resInterceptor = axios.interceptors.response.use( res => res, 
                error => (
                this.setState({error : error})
            ))
            this.reqInterceptor = axios.interceptors.request.use(  req => {this.setState({error: null})
        return req} , error => (
                this.setState({error : error})
            ) )
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor)

        }

        disableErrorMsg= () => (
            this.setState({error: null})
        )

        render () {
            return (
                <Auxiliary>
                    {/* <Modal disable={} show={}> */}
                    <Modal show={this.state.error}
                    disable = {this.disableErrorMsg}>
                        {this.state.error ? this.state.error.message : null}
    
                    </Modal>
                <WrappedContainer ></WrappedContainer>
                </Auxiliary>
            )
        }
        
    }
}

export default withErrorHandler;