import React from 'react';

import Auxiliary from '../../../hoc/auxiliary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map( (igKey) => {
        return <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
    })
    return(
        <Auxiliary>
            <h1> Order Summary </h1>
            <p> A delicious burger with following ingredients: </p>
            <ul>
                {ingredients}
            </ul>
            <p><strong> Total Price: {props.price}</strong></p>
            <p> Continue to checkout? </p>
            <Button type="Danger" clicked={props.cancelled}>Cancel</Button>
            <Button type="Success" clicked={props.continue}>  Continue</Button>
        </Auxiliary>
    )
}

export default orderSummary;