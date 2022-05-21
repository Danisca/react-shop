import React from 'react';
import ImageComponent from '@components/ImageComponent';
import arrowIcon from '@icons/bt_add_to_cart.svg';

const Card = (props) => {
    return ( 
        <article className="product-card">
        <ImageComponent 
        image={props.image} 
        imageAlt={props.imageAlt}
        />
        <div className="product-info">
            <div className="details">
                <p>${props.price}</p>
                <p>{props.name}</p>
            </div>
            <figure>
                <ImageComponent image={arrowIcon} imageAlt={"add to car"} />
            </figure>
        </div>
    </article>
     );
}
 
export default Card;