import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts:any =[]

  paigination=true;

  finalPrice:any;

  totalLength:any;
  page:number=1;


  products:any=[];
  iconDisplay=true;

  searchKey:string ='';
  filterCategory:any;

  // getAllProducts(){
  //   fetch('https://dummyjson.com/products')
  // .then(res => res.json())
  // .then(json =>{
  //   this.allProducts = json['products'];
  //   this.filterCategory =json['products'];
  //   this.totalLength =json['products'].length;
  //   this.finalPrice = (json['products'].price - (json['products'].price *json['products'].discountPercentage/100)).toFixed(2);
  //   console.log(this.finalPrice); 
  //   this.priceAfterDsicount()
  // })
  
  // }
  getAllProducts(){
    this.productsServ.getAllProducts().subscribe((products :any) =>{
      this.allProducts = products['products'];
      this.filterCategory =products['products'];
      this.totalLength =products['products'].length;
      this.finalPrice = (products['products'].price - (products['products'].price *products['products'].discountPercentage/100)).toFixed(2);
    this.priceAfterDsicount()
    } )
    
  }
  constructor(private productsServ:ProductsService) { 

  }

  ngOnInit(): void {
    this.getAllProducts()
    this.productsServ.search.subscribe(value =>{
      this.searchKey = value;
    })
  }

  sortAscending(){
    // this.allProducts = this.allProducts.sort(function(a:any, b:any){return a.finalPrice- b.finalPrice})
    // if(this.filterCategory){
    this.filterCategory = this.filterCategory.sort(function(a:any, b:any){return a.finalPrice - b.finalPrice})
  // }
    this.iconDisplay = !this.iconDisplay;

  }
sortDescending(){
  //  this.allProducts = this.allProducts.reverse();
  // if(this.filterCategory){
    this.filterCategory = this.filterCategory.reverse();
  // }
  this.iconDisplay = !this.iconDisplay;

}
filter(category:any){
  if(category==''){
    this.paigination = true;
  }
  else this.paigination = false;
  
  this.filterCategory = this.allProducts.filter((a:any)=>{
    if(a.category == category || category == ''){
      return a;
    }
  })
}

priceAfterDsicount(){
  for(let i=0; i<this.allProducts.length; i++){
  this.finalPrice = Number((this.allProducts[i].price - (this.allProducts[i].price *this.allProducts[i].discountPercentage/100)).toFixed(2));
  console.log(this.finalPrice);
  this.allProducts[i].finalPrice = this.finalPrice;
}
}
}
