import React, {useState} from 'react';
import {Product} from "./components/Product";
import {useProducts} from "./hooks/products";
import {Loading} from "./components/Loading";
import {Error} from "./components/Error";
import {Modal} from "./components/Modal";
import {CreateProduct} from "./components/CreateProduct";
import {IProduct} from "./models";

function App() {
    const { products, loading, error, addProduct } = useProducts();
    const [modal, setModal] = useState(true);

    const createHandler = ( product: IProduct ) => {
        setModal(false);
        addProduct( product );
    }

    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loading /> }
            { error && <Error error = { error } /> }
            { products.map(product => <Product product={ product } key={ product.id } />) }

            {modal && <Modal title="Create new product" onClose={ () => setModal(false) }>
                <CreateProduct onCreate={ createHandler } />
            </Modal>}
        </div>
    )
}

export default App;
