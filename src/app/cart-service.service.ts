import { Injectable } from '@angular/core';
import { Products } from './product.service';

@Injectable()
export class CartServiceService {
  public cartItems: Products[] = [];
  constructor() {}
}
