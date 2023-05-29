import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/Product';
import { ProductService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products!:IProduct[]
myName:string="";

status:boolean= false;

constructor(private ProductService:ProductService) {
  this.ProductService.getProducts().subscribe(data=>{
    this.products = data
  })
  
}

}
