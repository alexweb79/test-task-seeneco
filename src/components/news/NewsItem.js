import React from 'react';
import {Card} from 'react-bootstrap';

const NewsItem = ({title, body}) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsItem;
