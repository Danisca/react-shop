import React from 'react';
const UlList = (props, {childrens} )=>{
    return(
        <ul className={props.className} id={props.id}>
            {childrens}
        </ul>
    );
}
export default UlList;