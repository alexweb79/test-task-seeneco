import React from 'react';
import Container from 'react-bootstrap/Container';
import {Col, Row} from 'react-bootstrap';

const Title = ({title}) => {
    return (
        <Container>
            <Row>
                <Col className="mt-3 mb-4" md="auto">
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Title;
