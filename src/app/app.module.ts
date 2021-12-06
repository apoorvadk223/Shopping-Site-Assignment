import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';
import { NavigatonResolverService } from './navigaton-resolver.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CartServiceService } from './cart-service.service';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    CartComponent,
  ],
  providers: [
    ProductService,
    NavigatonResolverService,
    AuthGuardGuard,
    CartServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
