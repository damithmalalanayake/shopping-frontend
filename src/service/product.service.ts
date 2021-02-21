import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIConst} from '../config/api.const';

@Injectable()
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  listProducts() {
    return this.httpClient.get(APIConst.PRODUCT_LIST);
  }

  calculatePrice(id: number, quantity: number) {
    return this.httpClient.get(APIConst.PRODUCT_PRICE + '/' + id + '/' + quantity);
  }
}
