import React from 'react';
import ImageComponent from '@components/ImageComponent';
import arrowIcon from '@icons/flechita.svg';
import shoppingCar from '@icons/icon_shopping_cart.svg';

export default function LoggedIn(props){
    return (
      <ul>
        <li onClick={props.clickHandle}><span className='user-email'>platzi@example.com<ImageComponent image={arrowIcon} imageAlt={"Arrow icon"} /></span></li>
        <li  className="shopping-car">
          <ImageComponent image={shoppingCar} imageAlt={"shopping car icon"} />
          <div>2</div>
        </li>
      </ul>
    );
}