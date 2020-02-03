import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../shared/components/header-component/header.component'
import * as HeaderActions from '../actions/header.actions'
import { UserDto } from '../shared/dtos/users/user-dto'

export type HeaderState = {
  isUserLoggedIn: boolean,
  isUserAdmin: boolean,
  user: UserDto
}

export type HeaderContainerProps = {
  loadCurrentUser: () => void,
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerProps, HeaderState> {
  readonly state: HeaderState = {
    isUserLoggedIn: false,
    isUserAdmin: false,
    user: new UserDto()
  }

  logout(){
    HeaderActions.logout();
  }

  componentDidMount() {
    this.props.loadCurrentUser();
  }

  render() {
    return <HeaderComponent
      isUserLoggedIn={this.state.isUserLoggedIn}
      isUserAdmin={this.state.isUserAdmin}
      user={this.state.user}
      logout={this.logout} />
  }
}

const mapStateToProps = (store: any) => {
  return {
    header: store.header
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadCurrentUser: () => dispatch(HeaderActions.loadCurrentUser()),
    logout: () => dispatch(HeaderActions.logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
