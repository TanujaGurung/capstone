import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../utils/Common';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            getUser() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;