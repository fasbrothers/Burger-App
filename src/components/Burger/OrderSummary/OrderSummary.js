import React from 'react';
import Aux from '../../../hoc/Aaux/Aaux'
import Button from '../../UI/Button/Button'
import '../../UI/Button/Button.css'
import { Component } from 'react';

class OrderSummary extends Component {
    // componentDidUpdate() {
    //     console.log('[OrderSummary] WillUpdate');
    // }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Contine with Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} className='Danger'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} className='Success'>CONTINUE</Button>
            </Aux >

        )
    }
}
export default OrderSummary;