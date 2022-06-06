import React from 'react';
import { Link } from 'react-router-dom';
const ListLink = (props)=>{
    return( 

    <li className={props.className}>
        <Link to={props.to}>
            {props.text}
            {props.icon}
        </Link>
    </li>
    );
}

export default ListLink;