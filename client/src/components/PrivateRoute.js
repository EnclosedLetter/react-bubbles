import React from "react";
import { Route, Redirect } from "react-router-dom" //Route will route it to the home page, and redirect will reroute us to the login page if they don't have the token to log in.

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render={props => {
            //make a private route, look for the token, if it is there, pass it to the component
            if (localStorage.getItem("token")) {
                return <Component {...props} />
            } else { //if they don't have a token, they will be redirected to the home page "/"
                return <Redirect to="/" />;
            }
        }}
        />
    )
}

export default PrivateRoute;

//done with private route