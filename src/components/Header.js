import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <Container>
                <Row className="justify-content-end bg-body-tertiary">
                    <Col>
                        <Navigation/>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
