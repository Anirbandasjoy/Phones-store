import React, { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../LodingSpinar/Loading';
import Product from './Product';

const url = 'https://dummyjson.com/products';

const Products = () => {
    const { isLoading, error, data } = useFetch(url);

    useEffect(() => {

    }, [isLoading, error, data]);

    return (
        <div className='container mx-auto'>
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className=' my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        data.products.map((product) => <Product key={product.id} product={product} />

                        )
                    }
                </div>
            )}
        </div>
    );
};

export default Products;
