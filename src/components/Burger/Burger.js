import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let transformedIng= Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />;
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    },[])

    console.log(transformedIng)
    if(transformedIng.length==0){
        transformedIng=<p>Please start adding ingredients!</p>
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="salad" /> */}
            {transformedIng}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;