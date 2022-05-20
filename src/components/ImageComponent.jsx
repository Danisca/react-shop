import React from 'react';

const ImageComponent = (props)=>{
    return(
    <img src={props.image} alt={props.imageAlt} className={props.className != "" ? props.className : ''}/>
    );
}

export default ImageComponent;