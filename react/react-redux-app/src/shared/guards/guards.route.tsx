import { Route, Redirect } from "react-router";
import React, { Component }  from 'react';

export const GuardsRoute = ({ component: Component, guards: [], ...rest }: any) => (
    <Route {...rest} render={(props) => {
        
      debugger
        return <Component {...props} />
      
    //   return <Redirect to={{
    //     pathname: '/Login',
    //     state: { from: props.location }
    //   }}/>;
    }} />
 );