import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1 style={{width: '100%', margin: '10px auto '}}>We hope it tastes well!</h1>
            <div style={{ margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div style={{width: '100%', margin: 'auto 0px -300px'}}>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
                </div>
        </div>
    );
}

export default checkoutSummary;