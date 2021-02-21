import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.listPrices();
  }

  listPrices() {
    this.productService.listProducts().subscribe((response: Product[]) => {
      this.productList = response;
    }, error => alert(error));
  }
}
