import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  total=0;
  @Input()itemObj:any;
  redHeart=false;
  OutOfStock =false;

  constructor(private productsServ:ProductsService) { }

  ngOnInit(): void {
    this.afterDiscount()
  }
  addToCart(){
    this.productsServ.addItems();
    this.itemObj.stock--;
    if(this.itemObj.stock ==0){
      this.OutOfStock =true
    }
    console.log(this.productsServ.counter)
  }
  afterDiscount(){
    this.total= Number((this.itemObj.price - (this.itemObj.price *this.itemObj.discountPercentage/100)).toFixed(2));
  }

  changeHeartColor(){
    this.redHeart=!this.redHeart;
  }
}
