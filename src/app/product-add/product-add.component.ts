import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { HeroService } from 'src/app/services/hero.service';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = this.FormBuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:[0]

  })
}
