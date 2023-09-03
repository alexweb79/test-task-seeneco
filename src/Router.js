import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Pages} from './pages'
import {ROUTES} from './constants'

const Router = () => {
    const {isAuthenticated} = useSelector(state => state.auth);

    return (
        <Routes>
            <Route path={ROUTES.home} exact element={<Pages.HomePage/>}/>
            <Route path={ROUTES.news} element={<Pages.NewsPage/>}/>
            <Route path={ROUTES.login} element={<Pages.LoginPage/>}/>
            <Route
                path={ROUTES.profile}
                element={isAuthenticated ? <Pages.ProfilePage/> : <Navigate to={ROUTES.login}/>}
            />
            <Route path={ROUTES.notFound} element={<Pages.NotFoundPage/>}/>
        </Routes>
    );
};

export default Router;
