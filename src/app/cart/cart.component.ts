import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { NavigatonResolverService } from '../navigaton-resolver.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    public cartService: CartServiceService,
    public navigation: NavigatonResolverService
  ) {}

  ngOnInit() {}

  checkout() {}
}
