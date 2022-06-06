import React from 'react';

const ImageComponent = (props)=>{
    return(
    <img 
        id={props.id}
        src={props.image} 
        alt={props.imageAlt} 
        className={props.className} 
        onClick={props.handleClick}/>
    );
}

export default ImageComponent;