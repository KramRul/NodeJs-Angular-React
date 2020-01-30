import React, { Component } from 'react'
import './sidebar.component.css'

class SidebarComponent extends Component {
  render() {
    return <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 col-xs-11 p-l-2 p-t-2 hamburger">
        <a href="#sidebar" data-toggle="collapse"><i class="fa fa-navicon fa-lg"></i></a>
      </div>
      <div class="col-md-3 col-xs-1 p-l-0 p-r-0 collapse in" id="sidebar">
        <div class="list-group panel">
          {this.renderTemplate(this.props.responseModel)}
        </div>
      </div>
    </div>
  </div>
  }

  renderTemplate(categories){
    if(categories && categories.length > 0){
      let items = categories.map((item) => {
        return <div>{this.renderMenuItem(item)}</div>
      });
      return items;
    }
  }

  renderMenuItem(item){
    return <div> <a href="#menu{{item._id}}" className="list-group-item collapsed" data-toggle="collapse" aria-expanded="false" onclick="goToProductsByCategoryPage(item)">
    <span class="hidden-sm-down">{item.name}</span>
    </a>
    <div class="collapse" id="menu{{item._id}}">
       {this.renderTemplate(item.subcategories)} 
    </div>
    </div>
  }
}

export default SidebarComponent
