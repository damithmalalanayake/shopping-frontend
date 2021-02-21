import {environment} from '../environments/environment';

export class APIConst {
  public static BASE_URL = environment.BASE_URL;
  public static PRODUCT = APIConst.BASE_URL + '/product';
  public static PRODUCT_LIST = APIConst.PRODUCT + '/list';
  public static PRODUCT_PRICE = APIConst.PRODUCT + '/price';
}
