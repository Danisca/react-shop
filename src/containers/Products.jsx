import React from 'react';
import '@styles/products.scss';
import Actions from '@components/Actions';
import Card from '@components/Card';

const Products = () => {
    return ( 
        <div className="products-container">
            {/* TODO: Actions must to be a separate organism */}
        <Actions/>
        {/* TODO: cards-container must to be a ordanism */}
        <div className="cards-container">
            {/* TODO: each individual card must to be a separate component */}
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
            <Card image={"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            imageAlt={"product name"}
            price={"120,00"}
            name={"Bike"}
            />
        </div>
    </div>
     );
}
 
export default Products;