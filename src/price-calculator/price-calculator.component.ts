import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']
})
export class PriceCalculatorComponent implements OnInit {

  productList: Product[] = [];
  selectedProductId = 0;
  price = 0;
  quantity = 0;

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

  getCalculatedPrice() {
    if (this.selectedProductId === 0) {
      alert('Please select valid product!');
      return;
    }
    if (this.quantity === null || this.quantity === 0) {
      alert('Please enter valid quantity!');
      return;
    }
    this.productService.calculatePrice(this.selectedProductId, this.quantity).subscribe((response: number) => {
      this.price = response;
    }, error => alert(error));
  }

}
