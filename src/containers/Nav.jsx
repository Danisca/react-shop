import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.scss';

const Nav = ()=>{
    return (
        <nav className="navbar">
            <img className="menu-icon" src="./icons/icon_menu.svg" alt="menu icon"/>
            <section className="navbar-left">
                <img src="./logos/logo_yard_sale.svg" alt=""/>
                <ul>
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li><a href="#">Clothes</a></li>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">Furnitures</a></li>
                    <li><a href="#">Toys</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </section>
            <section className="navbar-right">
                <ul>
                    <li className="user-email"><a href="#">platzi@example.com</a></li>
                    <li className="shopping-car">
                        <img src="./icons/icon_shopping_cart.svg" alt=""/>
                        <div>2</div>
                    </li>
                    <li className="shopping-car-with-items">
                        <img src="./icons/icon_shopping_cart_notification.svg" alt=""/>
                    </li> 
                </ul>
            </section>
        </nav>  
    );
}
export default Nav;