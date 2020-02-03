import React, { Component } from 'react'
import HeaderContainer from '../containers/header.container'
import SidebarContainer from '../containers/sidebar.container'
import { Route, Redirect } from "react-router";
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './app.component.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <table>
          <tr>
            <td className="menu-sidebar">
              <SidebarContainer />
            </td>
            <td>
              <div className="content">
                <Router>
                  {/* <Route exact path="/" component={Home} />
                <Route path="/epic" component={Epic} /> */}
                  <Route
                    path="/about"
                    render={() => <p>Сделано на Кузнице #2</p>}
                  />
                </Router>
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}
