import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

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
                    <span className ="header_optionLineONe">Hello Guest</span>
                    <span className ="header_optionLineTwo">SignIn</span>
                </div>
                <div className = "header_option">
                    {/*  Orders*/}
                    <span className ="header_optionLineONe">returns</span>
                    <span className ="header_optionLineTwo"> Orders</span>
                </div>
                <div className = "header_option">
                    {/* PrimeMembership */}
                    <span className ="header_optionLineONe">Your</span>
                    <span className ="header_optionLineTwo">Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
