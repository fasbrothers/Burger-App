import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import '../../../components/UI/Button/Button.css'
import './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: '',
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })
        const order = {
            customer: {
                name: 'San Man',
                address: {
                    country: 'Uzbekistan',
                    street: 'Amir Temur 100',
                    zipCode: '100'
                },
                emailAddress: 'tes1@gmail.com'
            },
            deliverMethod: 'fastest',
            ingredients: this.props.ingredients,
            price: this.props.price,
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false });

            })
    }
    render() {
        let form = (
            <form>
                <input className='Input' type='text' name='name' placeholder='Your Name' />
                <input className='Input' type='email' name='email' placeholder='Your Email' />
                <input className='Input' type='text' name='street' placeholder='Your Street' />
                <input className='Input' type='text' name='postal' placeholder='Your Postal' />
                <Button className='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className='ContactData'>
                <h4>Enter your Contact data</h4>
                {form}
            </div>
        )
    }
}
