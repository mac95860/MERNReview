import React from 'react';
import './Payment.css';
import {useStateValue} from '../../util/StateProvider';
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

                </div>
                <div className ='payment_section'>

                </div>
                
            </div>

        </div>
    )
}
