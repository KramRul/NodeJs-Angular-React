import { Route, Redirect } from "react-router";
import React, { Component }  from 'react';
import { TokenHelper } from "../helpers/token.helper";

export const LoggedRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props) => {
      let tokenHelper = new TokenHelper();
      let token = tokenHelper.getToken();
      if (token) {
        return <Component {...props} />
      }
      return <Redirect to={{
        pathname: '/Login',
        state: { from: props.location }
      }}/>;
    }} />
 );
