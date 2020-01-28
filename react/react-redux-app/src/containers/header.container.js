import React from 'react'
import { connect } from 'react-redux'
import HeaderComponent from '../shared/components/header-component'

class HeaderContainer extends React.Component {
  render() {
    return <HeaderComponent />
  }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
