import React from "react";
import "@styles/header.scss";
import ImageComponent from '@components/ImageComponent';
import ListLink from "@components/ListLink";
import LoggedIn from "@components/LoggedIn";
import NotLoggedIn from '@components/NotLoggedIn';

import menuLogo from '@logos/logo_yard_sale.svg';
import menuIcon from '@icons/icon_menu.svg';



const loggedIn = false;

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left-logo">
        <ImageComponent image={menuIcon} imageAlt={"menu icon"} className={"menu-icon"}/>

      </div>
      <section className="navbar-left">
        {/* <img src="./ImageComponents/ImageComponent_yard_sale.svg" alt="" /> */}
        <ImageComponent image={menuLogo} imageAlt={"Logo de la pagina"} />
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
          {loggedIn == true ? <LoggedIn/> : <NotLoggedIn/>}
      </section>
    </nav>
  );
};
export default Header;