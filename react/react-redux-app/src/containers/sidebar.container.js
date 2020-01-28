import React from 'react'
import { connect } from 'react-redux'
import SidebarComponent from '../shared/components/sidebar-component'

class SidebarContainer extends React.Component {
  render() {
    return <SidebarComponent />
  }
}

const mapStateToProps = store => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
