import React, { Component } from 'react'
import { HeaderState } from '../../../containers/header.container';
import { UserDto } from '../../dtos/users/user-dto';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

export type HeaderProps = {
  isUserLoggedIn: boolean,
  isUserAdmin: boolean,
  user: UserDto,
  logout: () => void
}

export default class HeaderComponent extends Component<HeaderProps, HeaderState> {
  logout() {
    this.props.logout();
  }

  renderUserName = () => {
    const props = this.props
    if(props.isUserLoggedIn){
      return <div>Hello {props.user.name}</div>;
    }
    return;
  }

  renderAdminLinks = () => {
    const props = this.props;
    if(props.isUserLoggedIn && props.isUserAdmin){
      return     <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAdmin" role="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Admin
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdownAdmin">
        <a className="dropdown-item" href="/shop-admin/add-product-page">Add Product</a>
        <a className="dropdown-item" href="/shop-admin/add-category-page">Add Category</a>
      </div>
    </li>;
    }
    return;
  }

  renderLoginLink = () => {
    const props = this.props;
    if(!props.isUserLoggedIn){
      return <li className="nav-item">
        <Link className="nav-link" to="/account/login">Login</Link>
        {/* <a className="nav-link" href="/account/login">Login</a> */}
      </li>;
    }
    return;
  }

  renderLogoutLink = () => {
    const props = this.props;
    if(props.isUserLoggedIn){
      return <li className="nav-item">
      <a className="nav-link" onClick={(e) => this.logout()}>Logout</a>
      </li>;
    }
    return;
  }

  renderRegisterLink = () => {
    const props = this.props;
    if(!props.isUserLoggedIn){
      return <li className="nav-item">
      <a className="nav-link" href="account/register">Register</a>
    </li>;
    }
    return;
  }

  render() {
    const props = this.props
    return <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Store</a>
        <div className="mr-auto mt-2 mt-lg-0">
        </div>
        <div style={{color: 'rgba(255,255,255,.5)'}}>
          {this.renderUserName()}
        </div>
        <ul className="navbar-nav">
          {this.renderAdminLinks()}
          {this.renderLoginLink()}
          {this.renderLogoutLink()}
          {this.renderRegisterLink()}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
  }
}
