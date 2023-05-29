import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ListProductComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
