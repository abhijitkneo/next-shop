import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <Container className='mt-4'>
            <footer className='bg-dark rounded-top-3 py-3'>
                <Row>
                    <Col>
                        <p className='text-white text-center mb-0 small'>&copy; 2023 Next Shop. All rights reserved.</p>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}

export default Footer