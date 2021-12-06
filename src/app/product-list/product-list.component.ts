import { processRules } from '@angular/compiler/src/shadow_css';
import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { NavigatonResolverService } from '../navigaton-resolver.service';
import { Products, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    public navigation: NavigatonResolverService,
    public cartService: CartServiceService
  ) {}

  ngOnInit() {}

  deleteProduct(product: Products) {
    // this.productService.products = this.productService.products.filter(obj => obj.pid != product.pId);
    let index = this.productService.products.indexOf(product);
    this.productService.products.splice(index, 1);
  }

  addToCart(product: Products) {
    this.cartService.cartItems.push(product);

  }
  navigateToCart() {
    this.navigation.navigationResolver('cart');
  }
}
