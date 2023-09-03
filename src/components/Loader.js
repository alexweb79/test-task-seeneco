import React from 'react';
import {Placeholder} from 'react-bootstrap';

const Loader = () => {
    return (
        <Placeholder as="p" animation="glow">
            <Placeholder xs={12} bg="primary" />
        </Placeholder>
    );
};

export default Loader;
