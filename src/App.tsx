import React, {useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loading} from "./components/Loading";
import {Error} from "./components/Error";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";

function App() {
    const { products, loading, error } = useProducts();
    const [modal, setModal] = useState(true);

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loading /> }
            { error && <Error error = { error } /> }
            { products.map(product => <Product product={ product } key={ product.id } />) }

            {modal && <Modal title="Create new product">
                <CreateProduct onCreate={ () => setModal(false) } />
            </Modal>}
        </div>
    )
}

export default App;
