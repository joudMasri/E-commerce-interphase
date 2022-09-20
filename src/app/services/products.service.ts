import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsSubj = new Subject();
  products =[];

  counter = 0;
  counterSubj = new Subject<number>();

  search = new BehaviorSubject<string>(""); 
  
  constructor(private http:HttpClient) {
    // this.getAllProducts()
   }

  addItems() {
    this.counter++;
    this.counterSubj.next(this.counter);
  }

  getProductById(id:any){
    return this.http.get('https://dummyjson.com/products/'+id) 
  }

  // getAllProducts() :Observable<any>{
  // return this.http.get('https://dummyjson.com/products');
  // }

  getAllProducts(){
  return  this.http.get('https://dummyjson.com/products')
  }

  createProduct(model:any){
    return this.http.post('https://dummyjson.com/products',model)
  }

}

