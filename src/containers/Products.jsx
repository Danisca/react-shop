import React,{useState} from 'react';
import '@styles/products.scss';
import Actions from '@components/Actions';
import Card from '@components/Card';
import ProductDetail from '@containers/ProductDetail';
import useGetProducts from '../hooks/UseGetProduts';

const API = 'http://api.escuelajs.co/api/v1/products/';

const Products = () => {
    // this state controls if show or not the details of a product
    const [selectedProduct, setSelectedProduct] = useState({});
    const data = useGetProducts(API);

    // handle when to update a selectedProduct variable that controls the state
    // when is call from the product's car the target has an product.id as it own html id
    // when the close icon triggered the event there are no product.id 
    function toggleProductDetails(e){
        const id = e.target.id;
        const product = data.find(d => d.id == id);
        if (!product){
            setSelectedProduct({})
        }else{
            setSelectedProduct(product);
        }
        // console.log(product);
        // productDetails === true ? setProductsDetails(false) : setProductsDetails(true);
    }

    return ( 
        <div className="products-container">
            {/* TODO: Actions must to be a separate organism */}
        <Actions/>
        {/* TODO: cards-container must to be a ordanism */}
        <div className="cards-container">
        {data.map((product)=>(
            <Card 
                key={product.id}
                product={product}
                showProductDetails={toggleProductDetails}
            />)
        )}
        </div>
        {selectedProduct.id > 0  ? <ProductDetail product={selectedProduct} closeMe={toggleProductDetails} /> : null}
    </div>
  );
}
 
export default Products;
