import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';
import Copyright from './Copyright';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="Footer">
            <Container>
                <Row className="justify-content-start bg-body-tertiary">
                    <Col className="pt-3 pb-3">
                        <Copyright/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
