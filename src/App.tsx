import React from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loading} from "./components/Loading";
import {Error} from "./components/Error";

function App() {
    const { products, loading, error } = useProducts();

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loading /> }
            { error && <Error error = { error } /> }
            { products.map(product => <Product product={ product } key={ product.id } />) }
        </div>
    )
}

export default App;
