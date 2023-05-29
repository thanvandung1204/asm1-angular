import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Product';
@Injectable({
  providedIn: 'root'
})
export class HeroService{
  constructor(private http:HttpClient) {}
  
  getProduct():Observable<IProduct>{
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
}
