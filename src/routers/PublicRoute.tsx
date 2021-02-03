import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';

type PublicRouteProps = {
    isAuthenticated: boolean,
    component: React.ElementType,
    [k:string]: any
}
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: PublicRouteProps) => {

    return (
        <Route { ...rest }
            component={ (props: any) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/" /> )
                    : ( <Component { ...props } /> )
            )}
        
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
