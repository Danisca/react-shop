import React from 'react';
import ListLink from '@components/ListLink';
import ImageComponent from '@components/ImageComponent';
import shoppingCarNotification from '@icons/icon_shopping_cart_notification.svg';

export default function LoggedIn(){
    return(
        <ul>
          <ListLink 
          to={'login'} 
          text={'login'} 
          className={"login-link"} 
          />
          <ListLink 
          to={''} 
          text={''} 
          className={''} 
          icon={
            <div>
              <ImageComponent image={shoppingCarNotification} className={"shopping-car-with-items"} imageAlt={"shopping car with notification"} />
            </div>
          }/>
    
        </ul>);
}