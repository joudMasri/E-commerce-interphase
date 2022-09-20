import { Component, OnDestroy, OnInit } from '@angular/core';
// import { observable, Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchTerm:string= '';
  badge: number = 0;
  subscription: any;
  constructor(private productsServ:ProductsService) { }

  ngOnInit(): void {
    this.badge = this.productsServ.counter;
    this.subscription = this.productsServ.counterSubj.subscribe(num => {
      this.badge = num;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   this.addItemServ.search.next(this.searchTerm);
  // }

   search(event :any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productsServ.search.next(this.searchTerm);
  }
}
