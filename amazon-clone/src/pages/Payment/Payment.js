import React from 'react';
import './Payment.css';
import {useStateValue} from '../../util/StateProvider';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';

export default function Payment() {
    const [ { basket, user}, dispatch ] = useStateValue()
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
                    </div>
                </div>
                
            </div>

        </div>
    )
}
