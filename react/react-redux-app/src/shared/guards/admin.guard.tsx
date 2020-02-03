import { Route, Redirect } from "react-router";
import React, { Component }  from 'react';
import { UserHelper } from "../helpers/user.helper";
import { UserRoleTypeDto } from "../dtos/enums/user-role-type-dto";

export const AdminRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={(props) => {
      let userHelper = new UserHelper();
      let role = userHelper.getCurrentUserRole();
      if (role && role === UserRoleTypeDto.Admin) {
        return <Component {...props} />
      }
      return <Redirect to={{
        pathname: '/Login',
        state: { from: props.location }
      }}/>;
    }} />
 );