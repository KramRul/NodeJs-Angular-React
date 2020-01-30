import React from 'react'
import { connect } from 'react-redux'
import SidebarComponent from '../shared/components/sidebar-component/sidebar.component'
import * as SidebarActions from '../actions/sidebar.actions'

class SidebarContainer extends React.Component {
  render() {
    return <SidebarComponent />
  }
}

const mapStateToProps = store => {
  return {
    sidebar: store.sidebar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(SidebarActions.loadData()),
    goToProductsByCategoryPage: () => dispatch(SidebarActions.goToProductsByCategoryPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
