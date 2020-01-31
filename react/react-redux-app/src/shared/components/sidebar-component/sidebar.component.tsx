import React, { Component } from 'react'
import './sidebar.component.css'

class SidebarComponent extends Component {
  render() {
    return <div className="container-fluid">
    <div className="row">
      <div className="col-md-9 col-xs-11 p-l-2 p-t-2 hamburger">
        <a href="#sidebar" data-toggle="collapse"><i className="fa fa-navicon fa-lg"></i></a>
      </div>
      <div className="col-md-3 col-xs-1 p-l-0 p-r-0 collapse in" id="sidebar">
        <div className="list-group panel">
          {this.renderTemplate(this.props.responseModel)}
        </div>
      </div>
    </div>
  </div>
  }

  renderTemplate(categories:any){
    if(categories && categories.length > 0){
      let items = categories.map((item: any) => {
        return <div>{this.renderMenuItem(item)}</div>
      });
      return items;
    }
  }

  renderMenuItem(item: any){
    return <div> <a href="#menu{{item._id}}" className="list-group-item collapsed" data-toggle="collapse" aria-expanded="false" onClick={this.goToProductsByCategoryPage(item)}>
    <span className="hidden-sm-down">{item.name}</span>
    </a>
    <div className="collapse" id="menu{{item._id}}">
       {this.renderTemplate(item.subcategories)} 
    </div>
    </div>
  }
}

export default SidebarComponent
