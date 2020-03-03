import React, { Component } from 'react';
import Auxiliary from '../../hoc/auxiliary'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axiosInstance from '../axioms-orders'
import withErrorHandler from '../../hoc/withErrorHandler'
import Spinner from '../../components/UI/Spinner/Spinner'

const IngPrices = {
    salad: 1,
    cheese: 1,
    bacon: 1.5,
    meat: 2
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 2,
        purchasable: false,
        ordering: false,
        loading: false,
    }

    componentDidMount() {
        console.log("component did mount")
        axiosInstance.get('https://burgerbuilder-9eb82.firebaseio.com/ingredients.json').then(res => (this.setState({ ingredients: res.data  })))
    }

    isPurchasable = (price) => {
        let bool = this.state.purchasable;
        if (price > 2) bool = true
        else bool = false;
        this.setState({
            purchasable: bool,
        })
    };

    orderingHandler = () => (this.setState({ ordering: true }));

    orderCancelHandler = () => (this.setState({ ordering: false }));

    orderContinueHandler = () => {
        this.setState({ loading: true })

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Priyanka Singla',
                email: 'singlapriyanka97@gmail.com',
                address: {
                    street: 'Palam Vihar',
                    state: 'Haryana',
                    country: 'India'
                }
            },

        }
        axiosInstance.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, ordering: false })
                console.log(response)
            })
            .catch(error => {
                this.setState({ loading: false, ordering: false })
                console.log(error)
            })

    };

    addIngHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const oldIng = { ...this.state.ingredients };
        oldIng[type] = oldCount + 1;
        const totalPriceNew = this.state.totalPrice + IngPrices[type];
        this.setState({
            ingredients: oldIng,
            totalPrice: totalPriceNew,
        });
        this.isPurchasable(totalPriceNew);
    }

    removeIngHandler = (type) => {
        if (this.state.ingredients[type] > 0) {
            const oldCount = this.state.ingredients[type];
            const oldIng = { ...this.state.ingredients };
            oldIng[type] = oldCount - 1;
            const totalPriceNew = this.state.totalPrice - IngPrices[type];
            this.setState({
                ingredients: oldIng,
                totalPrice: totalPriceNew,
            });
            this.isPurchasable(totalPriceNew);
        }

    }

    render() {

        let burgerDisplay = <Spinner />
        let orderSummary = null;

        if (this.state.ingredients) {
            burgerDisplay = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients} />
                    <p><strong> Current Price: {this.state.totalPrice}
                    </strong></p>
                    <BuildControls
                        added={this.addIngHandler}
                        removed={this.removeIngHandler}
                        purchasable={this.state.purchasable}
                        order={this.orderingHandler} />
                </Auxiliary>);
                orderSummary = <OrderSummary ingredients={this.state.ingredients}
                cancelled={this.orderCancelHandler}
                continue={this.orderContinueHandler}
                price={this.state.totalPrice} />

        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        } 

        return (
            <Auxiliary  >
                <Modal show={this.state.ordering} modalClose={this.orderCancelHandler}>
                    {orderSummary}
                </Modal>

                {burgerDisplay}


            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosInstance);