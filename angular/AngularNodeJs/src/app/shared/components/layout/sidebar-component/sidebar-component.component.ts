import { Component, OnInit } from '@angular/core';
import { ShopClientService } from 'src/app/shared/services/shop-client.service';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent implements OnInit {

  constructor(private shopClientService: ShopClientService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.shopClientService.getAllCategories().toPromise();
  }
}
