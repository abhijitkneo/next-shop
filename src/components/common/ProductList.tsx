'use client';

import { getProducts } from '@/services/ProductService';
import { Product } from '@/types';
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { useSearch } from '@/context/SearchContext';
import useDebounce from '@/hooks/useDebounce';

const ProductList = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([])
    const visibleProductCount = 8;
    const [visibleCount, setVisibleCount] = useState(visibleProductCount)
    const [loadingMore, setLoadingMore] = useState(false)
    const loadRef = useRef<HTMLDivElement | null>(null)
    const { searchTerm } = useSearch();
    const debouncedSearch = useDebounce(searchTerm, 800);


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
        if (!loadRef.current || debouncedSearch) return;

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

    }, [visibleCount, loadingMore, products.length, debouncedSearch])

    //filtered products by search term
    //const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
    //const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(debouncedSearch.toLowerCase()));
    const filteredProducts = React.useMemo(() => {
        return(
            products.filter((product) => product.title.toLowerCase().includes(debouncedSearch.toLowerCase()))

        )
    }, [products, debouncedSearch])

    //disabling slicing while searching
    //const displayedProducts = searchTerm ? filteredProducts : filteredProducts.slice(0 , visibleCount);
    const displayedProducts = debouncedSearch ? filteredProducts : filteredProducts.slice(0, visibleCount);

    useEffect(() => {
        setVisibleCount(visibleProductCount)
    }, [debouncedSearch])
    
    return (
        <>
            <Row className='g-3'>
                {
                    displayedProducts.map((product) => (
                        <Col key={product.id} md={3}>
                            <ProductCard product={product} />
                        </Col>
                    ))
                }
            </Row>
            {!debouncedSearch && visibleCount < products.length && (
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