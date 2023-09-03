import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ROUTES} from '../constants';
import {Nav, Navbar} from 'react-bootstrap';
import {logout} from '../redux/auth/authSlice';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const {isAuthenticated} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleLogout = (event) => {
        event.preventDefault()
        dispatch(logout());
    };

    return (
        <Navbar expand="lg" className="justify-content-end">
            <Nav>
                <Nav.Link as={Link} to={ROUTES.home}>Home</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.news}>News</Nav.Link>
                <Nav.Link as={Link} to={ROUTES.profile}>Profile</Nav.Link>
                {isAuthenticated && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
            </Nav>
        </Navbar>
    );
};

export default Navigation;
