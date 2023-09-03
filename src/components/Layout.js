import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>{children}</Col>
                    </Row>
                </Container>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
