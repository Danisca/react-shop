import React from 'react';
import ImageComponent from '@components/ImageComponent';
import arrowIcon from '@icons/flechita.svg';

const Actions = () => {
    return ( 
        <div className="actions">
            {/* TODO: search must to be a separate molecule */}
            <div className="search">
                <form action="#">
                    <label >
                        <input type="search" placeholder="Search product" id="searchField" name="search-field"/>
                    </label>
                </form>
            </div>
            {/* TODO: order-buttons must to be a separate component */}
            <div className="order-buttons">
                 <p>Order:</p>
                <ul>
                    <li>Most recent 
                        <ImageComponent image={arrowIcon} imageAlt={"arrow icon"} />
                        {/* <img src="./icons/flechita.svg" alt=""/>  */}
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Actions;