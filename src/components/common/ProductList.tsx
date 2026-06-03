'use client';

import { getProducts } from '@/services/ProductService';
import { Product } from '@/types';
import React, { useEffect, useRef, useState } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([])
    const visibleProductCount = 8;
    const [visibleCount, setVisibleCount] = useState(visibleProductCount)
    const [loadingMore, setLoadingMore] = useState(false)
    const loadRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        })
        .finally(() => setLoading(false))
    },[])

    console.log(products, '<<<<');

    useEffect(() => {
        if (!loadRef.current) return;

        const observer = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting && visibleCount < products.length && !loadingMore) {
                setLoadingMore(true)

                setTimeout(() => {
                    setVisibleCount((prev) => Math.min(prev + visibleProductCount, products.length));
                    setLoadingMore(false);
                }, 600)
            }
        }, {threshold: 0.5});
        observer.observe(loadRef.current)

        return () => {
            if (loadRef.current) observer.unobserve(loadRef.current);
        };

    }, [visibleCount, loadingMore, products.length])
    
    return (
        <>
            <Row className='g-3'>
                {
                    products.slice(0, visibleCount).map((product) => (
                        <Col key={product.id} md={3}>
                            <ProductCard product={product} />
                        </Col>
                    ))
                }
            </Row>
            {visibleCount < products.length && (
                <Row className="mt-3">
                    <Col ref={loadRef} className="text-center">
                        <div className="d-inline-flex align-items-center gap-2 border border-primary rounded py-2 px-3">
                            <Spinner animation="border" size="sm" variant="primary" />Loading more products
                        </div>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductList