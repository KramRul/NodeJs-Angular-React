import React from 'react'
import { connect } from 'react-redux'
import SidebarComponent from '../shared/components/sidebar-component/sidebar.component'
import * as SidebarActions from '../actions/sidebar.actions'
import { CategoryDto } from '../shared/dtos/categories/category-dto'

export type SidebarState = {
  responseModel: Array<CategoryDto>
}

class SidebarContainer extends React.Component<{}, SidebarState> {
  readonly state: SidebarState = {
    responseModel: new Array<CategoryDto>()
  }

  goToProductsByCategoryPage(){
    SidebarActions.goToProductsByCategoryPage();
  }

  render() {
    return <SidebarComponent
      responseModel={this.state.responseModel}
      goToProductsByCategoryPage={this.goToProductsByCategoryPage} />
  }
}

const mapStateToProps = (store: any) => {
  return {
    sidebar: store.sidebar
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(SidebarActions.loadData()),
    goToProductsByCategoryPage: () => dispatch(SidebarActions.goToProductsByCategoryPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer)
