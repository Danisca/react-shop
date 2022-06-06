import React,{useState} from 'react';
import '@styles/productDetail.scss'
import ImageComponent from '@components/ImageComponent';
import addToCar from '@icons/bt_add_to_cart.svg';
import closeIcon from '@icons/icon_close.png';

const ProductDetails = (props) => {
    // this state change the image selected from the three bottons
    // on this component
    const [image, setImage] = useState(0);

    // handle how to validate to change the state to set the image to shows
    const changeImage = (e)=>{
        const id = parseInt(e.target.id);
        console.log(`image: ${image}, id: ${id}`);
        switch (id) {
            case 1:
                setImage(0);
                break;
            case 2:
                setImage(1);
                break;
            case 3:{
                setImage(2);
                break;
            }
            default:
                setImage(0);
                break;
        }
    }

    return ( 
        <section className="product-details-info" id={props.id}>
            {/* <img className="close-menu-icon" src="./icons/icon_close.png" alt="close menu"/> */}
            <ImageComponent image={closeIcon} className={"close-menu-icon"} imageAlt={"close x icon"} handleClick={props.closeMe} />
            <figure className="product-photos">
                <img src={props.product.images[image]} alt="bike"/>
                <div className="photos-btn">
                    <div className={image === 0 ? 'active' : ''} id={1} onClick={changeImage}></div>
                    <div className={image === 1 ? 'active' : ''} id={2} onClick={changeImage}></div>
                    <div className={image === 2 ? 'active' : ''} id={3} onClick={changeImage}></div>
                </div>
            </figure>
            <article className="product-details">
                <p className="info">
                    <span className="product-price">${props.product.price}</span>
                    <span className="product-name">{props.product.title}</span>
                </p>
                <p className="product-description">
                    {props.product.description}
                </p>
                <button className="btn">
                    <ImageComponent image={addToCar} imageAlt={"add to car image"} />
                    {/* <img src="./icons/bt_add_to_cart.svg" alt=""/> */}
                    add to car
                </button>
            </article>
        </section>
     );
}
 
export default ProductDetails;