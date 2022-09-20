import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  counter = 0;
  counterSubj = new Subject<number>();
  // counter = new EventEmitter();

  search = new BehaviorSubject<string>(""); 
  
  constructor(private http:HttpClient) { }

  addItems() {
    this.counter++;
    this.counterSubj.next(this.counter);
  }

  getProductById(id:any){
    return this.http.get('https://dummyjson.com/products/'+id)
  }
}
