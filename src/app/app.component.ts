import { Component, OnInit } from '@angular/core';
import { NavigatonResolverService } from './navigaton-resolver.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public navigation: NavigatonResolverService) {}
  ngOnInit() {
    this.navigation.navigationResolver('cart');
  }
}
