import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../shared/components/header-component/header.component'
import * as HeaderActions from '../actions/header.actions'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(HeaderActions.loadCurrentUser());
  }

  render() {
    return <HeaderComponent />
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
