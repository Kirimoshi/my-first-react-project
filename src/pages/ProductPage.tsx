import React, {useContext} from "react";
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {Loading} from "../components/Loading";
import {Error} from "../components/Error";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductPage() {
    const { products, loading, error, addProduct } = useProducts();
    const { modal, open: openModal, close: closeModal } = useContext(ModalContext);

    const createHandler = ( product: IProduct ) => {
        closeModal();
        addProduct( product );
    }

    return(
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loading /> }
            { error && <Error error = { error } /> }
            { products.map(product => <Product product={ product } key={ product.id } />) }

            {modal && <Modal title="Create new product" onClose={ closeModal }>
                <CreateProduct onCreate={ createHandler } />
            </Modal>}

            <button
                className="fixed bottom-5 right-5 bg-red-700 rounded-full text-white px-4 py-2 text-2xl"
                onClick={ openModal }>
                +
            </button>
        </div>
    )
}