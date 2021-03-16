import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import '../../UI/Button/Button.css'
import './CheckoutSummary.css'

const CheckoutSummary = (props) => {
    return (
        <div className='CheckoutSummary'>
            <h1>We hope it testes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button className="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button className="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default CheckoutSummary;