'use client';

import { getProducts } from '@/services/ProductService';
import { Product } from '@/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        }).finally(() => setLoading(false))
    },[])

    return (
        <>
            {
                products.map((product) => (
                    <li key={product.id}>
                        <p>{product.title}</p>
                        <p className='small text-primary'>{product.category}</p>
                        <Image src={product.image} alt='' width={100} height={100} loading='lazy' />
                    </li>
                ))
            }
        </>
    )
}

export default ProductList