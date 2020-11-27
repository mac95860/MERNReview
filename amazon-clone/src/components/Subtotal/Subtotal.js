import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

export default function Subtotal() {
    return ( 
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                        (Subtotal 0 items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={1} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout </button>
        </div>
    );
}
