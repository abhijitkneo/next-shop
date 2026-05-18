'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Col, Container, Nav, NavLink, Row } from 'react-bootstrap'
import { FiUser } from 'react-icons/fi';
import { LuSearch, LuShoppingCart } from 'react-icons/lu';

const Header = () => {
    const pathname = usePathname();
    return (
        <Container className='sticky-top'>
            <header className='bg-white rounded-bottom-3 border border-top-0 p-3'>
                <Row>
                    <Col md={3}>
                        <Link href={'/'}>
                            <img src="/assets/images/logo.png" alt="" className='logo img-fluid' loading='eager' />
                        </Link>
                    </Col>
                    <Col md={9} className='align-self-center'>
                        <div className="d-flex align-items-center justify-content-between">
                            <Nav>
                                <Link href={'/'} className={`nav-link ${pathname === '/' ? 'active': ''}`}>Home</Link>
                                {/* <Link href={'/products'} className={`nav-link ${pathname.startsWith('/products') ? 'active': ''}`}>
                                    Products
                                </Link> */}
                                <Link href={'/categories'} className={`nav-link ${pathname.startsWith('/categories') ? 'active': ''}`}>Categories</Link>
                            </Nav>
                            <div className="hstack gap-3">
                                <Button variant='transparent' className='p-0 btn-icon'><LuSearch size={24} /></Button>
                                <Button variant='transparent' className='p-0 btn-icon position-relative'>
                                    <LuShoppingCart size={24}/>
                                    {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small p-0 d-inline-flex align-items-center justify-content-center cart-count mt-n1">
                                        3
                                    </span> */}
                                </Button>
                                <Button variant='transparent' className='p-0 btn-icon'><FiUser size={24} /></Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </header>    
        </Container>
    )
}

export default Header