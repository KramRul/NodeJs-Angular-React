import React, { Component } from 'react'
import HeaderContainer from '../containers/header.container'
import SidebarContainer from '../containers/sidebar.container'
import { Route, Redirect } from "react-router";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './app.component.css'
import LoginComponent from '../account/components/login/login.component';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <HeaderContainer />
          <table>
            <tr>
              <td className="menu-sidebar">
                <SidebarContainer />
              </td>
              <td>
                <div className="content">
                  <Route path="/account/login" component={LoginComponent} />
                </div>
              </td>
            </tr>
          </table>
        </Router>
      </div>
    )
  }
}
