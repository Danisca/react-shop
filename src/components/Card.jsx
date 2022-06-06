import React from 'react';
import ImageComponent from '@components/ImageComponent';
import addToCar from '@icons/bt_add_to_cart.svg';

const Card = (props) => {
    return ( 
        <article className="product-card">
        <ImageComponent 
        image={props.product.images[0]} 
        imageAlt={props.product.title}
        />
        <div className="product-info">
            <div className="details">
                <p>${props.product.price}</p>
                <p>{props.product.title}</p>
            </div>
            <figure onClick={props.showProductDetails} >
                <ImageComponent id={props.product.id}  image={addToCar} imageAlt={"add to car"} />
            </figure>
        </div>
    </article>
     );
}
 
export default Card;