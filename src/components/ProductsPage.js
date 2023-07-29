import {useState} from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage (){
    const [products]= useState(jsonData);
    const [productsData, setProductsData]= useState(jsonData);

    const filterProducts = (str) => {
    let filteredProducts;
    if (str === 'All'){
        filteredProducts= products;
    } else {
        filteredProducts= products.filter((product) => product.name.includes(str))
    }
    setProductsData(filteredProducts);
    console.log('Filtered products', filteredProducts)
    }
    
    return(
        <div className='ProductsPage'>
            <h1>IronStore</h1>
            <SearchBar products= {products} productsData= {productsData} filterProducts = {filterProducts}/>
            <ProductTable products= {productsData}/>
        </div>
    )
}

export default ProductsPage;