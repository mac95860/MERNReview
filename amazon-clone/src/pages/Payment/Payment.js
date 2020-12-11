import React from 'react';
import './Payment.css';
import {useStateValue} from '../../util/StateProvider';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct'
export default function Payment() {
    const [ { basket, user}, dispatch ] = useStateValue()
    return (
        <div className = "payment">
            <div className = 'payment_container'>
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

                </div>
                
            </div>

        </div>
    )
}
