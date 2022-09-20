import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  total = 0;
  itemNumber=1;
  more= true;
  id:any;
  srcImg:any;
  itemObj:any;
  focusedImage: any;
  itemQuantity:number=1;

  outOfStock =false;
  addToCartEnable = false;

  constructor(private productsServ:ProductsService,
    private actRoute: ActivatedRoute) {
      this.id = this.actRoute.snapshot.url[1].path;
      console.log(this.id)
      
    }

  ngOnInit(): void {
    this.getProduct();
  }

  readMore(){
    this.more = !this.more;
    return this.more;
  }

  changeHeight(){

  }
  decrement(){
    if(this.itemNumber !=1){
      this.itemNumber--;
    }
  }

increment(){
  if(this.itemNumber !=this.itemQuantity){
    this.itemNumber++;
  }
  // else if(this.itemNumber == this.itemQuantity){
  //   this.addToCartEnable =true
  // }
}
showLess(){
  this.more = !this.more;
  return this.more
}

addToCart(){
    for(let i = 0 ; i<this.itemNumber;i++){
      this.productsServ.addItems();
      this.itemQuantity--;
      if(this.itemQuantity==0){
      this.outOfStock =true
    }
      if (this.itemQuantity < this.itemNumber){
        this.addToCartEnable=true;
      }
    }
    this.itemNumber=1
  }

  getProduct(){
    this.productsServ.getProductById(this.id).subscribe(res =>{
      this.itemObj = res;
      
    this.afterDiscount()
    this.srcImg=this.focusedImage= this.itemObj.thumbnail;
    this.itemQuantity = this.itemObj.stock;
  });
  }
  afterDiscount(){
    this.total= Number((this.itemObj.price - (this.itemObj.price *this.itemObj.discountPercentage/100)).toFixed(2));
  
  console.log(this.total)
}
changeImg(image:any){
  this.srcImg = image;
  this.focusedImage = image;
}

}
