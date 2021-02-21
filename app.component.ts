import { Component, OnInit, ViewChildren } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  @ViewChildren('productList')
  productList: ProductListComponent;

  ngOnInit() : void {
      this.productList.products = [
        { name: 'ส้มโอ', price: 111 },
        { name: 'แตงโม', price: 222 },
        { name: 'มะพร้าวน้ำหอม', price: 333 }
    ];
  }
  constructor() {}
}
