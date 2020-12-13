import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from '../../util/StateProvider';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../util/reducer';


export default function Payment() {
    const [ { basket, user}, dispatch ] = useStateValue();


    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled ] = useState(true);
    const handleSubmit = e => {

    }

    const handleChange = e => {
            //listen for changes in the CardElement
            // and display andy errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "")
    }

    return (
        <div className = "payment">
            <div className = 'payment_container'>
                <h1>
                    Checkout (<Link to="/checkout">
                            {basket?.length}
                        </Link>) items
                </h1>
                <div className ='payment_section'>
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className ="payment_address">
                        <p>{user?.email}</p>
                        <p>123 Programmer Lane</p>
                        <p>Chicago, IL 60605</p>

                    </div>
                </div>
                <div className ='payment_section'>
                        <div className = "payment-address">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className = 'payment_item'>
                            {/* items in basket go here */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price= {item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                </div>
                <div className ='payment_section'>
                    <div className = "payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className = "payment_details">
                            {/* stripe code goes here */}
                            <form onSubmit = {handleSubmit}>
                               <CardElement onChange={handleChange}/> 
                               <div className = "payment_priceContainer">
                                    <CurrencyFormat
                                        renderText = {(value) => (
                                            <>
                                                <h3>Order Total: {value}</h3>
                                            </>
                                        )}
                                        decimalsScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                               </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
