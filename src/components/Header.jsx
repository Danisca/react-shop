import React from "react";
import "@styles/header.scss";
import ImageComponent from '@components/ImageComponent';
import menuLogo from '@logos/logo_yard_sale.svg';
import menuIcon from '@icons/icon_menu.svg';
import shoppingCar from '@icons/icon_shopping_cart.svg';
// import shoppingCarNotification from '@icons/icon_shopping_cart_notification.svg';

const Header = () => {
  return (
    <nav className="navbar">
        <ImageComponent image={menuIcon} imageAlt={"menu icon"} className={"menu-icon"}/>
      <section className="navbar-left">
        {/* <img src="./ImageComponents/ImageComponent_yard_sale.svg" alt="" /> */}
        <ImageComponent image={menuLogo} imageAlt={"Logo de la pagina"}/>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Clothes</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Furnitures</a>
          </li>
          <li>
            <a href="#">Toys</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
        </ul>
      </section>
      <section className="navbar-right">
        <ul>
          <li className="user-email">
            <a href="#">platzi@example.com</a>
          </li>
          <li className="shopping-car">
              <ImageComponent image={shoppingCar} imageAlt={"shopping car icon"} />
            <div>2</div>
          </li>
          {/* <li className="shopping-car-with-items">
              <ImageComponent image={shoppingCarNotification} imageAlt={"shopping car with notification"} />
          </li> */}
        </ul>
      </section>
    </nav>
  );
};
export default Header;
