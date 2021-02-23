import React from 'react';
import Aux from '../../../hoc/Aaux'
import Button from '../../UI/Button/Button'
import '../../UI/Button/Button.css'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Contine with Checkout?</p>
            <Button clicked={props.purchaseCancelled} className='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinued} className='Success'>CONTINUE</Button>
        </Aux>
    )

}
export default orderSummary;