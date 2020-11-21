import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className = "header">
            <img className = "header_logo" src = '/images/Amazonlogo.png' alt = "logo"/>
    

            <div className = "header_search">
                <input className ="header_searchInput" type = "text"/>
                <SearchIcon className = "header_searchIcon"/>
            </div>

            <div className="header_nav">
                <div className = "header_option">
                    {/* signIn */}
                    <span className ="header_optionLineOne">Hello Guest</span>
                    <span className ="header_optionLineTwo">SignIn</span>
                </div>
                <div className = "header_option">
                    {/*  Orders*/}
                    <span className ="header_optionLineOne">returns</span>
                    <span className ="header_optionLineTwo"> Orders</span>
                </div>
                <div className = "header_option">
                    {/* PrimeMembership */}
                    <span className ="header_optionLineOne">Your</span>
                    <span className ="header_optionLineTwo">Prime</span>
                </div>

                <div className = "header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className = "header_optionLineTwo header_basketCount">0</span> 
                </div>
            </div>
        </div>
    )
}

export default Header
