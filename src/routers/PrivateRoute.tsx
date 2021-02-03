import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, RouteProps } from 'react-router-dom';

type PrivateRouteType = {
    isAuthenticated: boolean,
    component: React.ElementType,
    [k:string]: any
} & RouteProps 

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PrivateRouteType) => {

    return (
        <Route { ...rest }
            component={ (props: any) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/auth/login" /> )
            )}
        
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
