import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../utils/Common';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            getUser() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    );
};

export default PrivateRoute;