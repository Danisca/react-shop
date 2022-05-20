import React from 'react';
import ListLink from '@components/ListLink';
import ImageComponent from '@components/ImageComponent';
import arrowIcon from '@icons/flechita.svg';
import shoppingCar from '@icons/icon_shopping_cart.svg';

export default function LoggedIn(){
    return (
      <ul>
        <ListLink
          to={"#"}
          text={"platzi@example.com"}
          className={"user-email"}
          icon={<ImageComponent image={arrowIcon} imageAlt={"Arrow icon"} />}
        />
        <li className="shopping-car">
          <ImageComponent image={shoppingCar} imageAlt={"shopping car icon"} />
          <div>2</div>
        </li>
      </ul>
    );
}