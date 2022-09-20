import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  allProducts: any = [];
  enablePopup= false;
  editProduct:FormGroup |any;
  title:any;
  description:any;
  price:any

  item:any;
  id:any;
  
  constructor(private productsServ: ProductsService , private build : FormBuilder) { }
  ngOnInit(): void {
      this.getAllProducts();
      this.initForm();
      
  }

    private initForm() {
    this.editProduct = this.build.group({
      title:['',[ Validators.required,Validators.maxLength(20),Validators.minLength(3)]],
      description: ['', [Validators.required,Validators.minLength(20),Validators.maxLength(150) ]],
      price: ['',[Validators.required,Validators.maxLength(10)]],
      discount: ['',[Validators.required,Validators.max(99)]],
      rating:['',],
      stock:['',Validators.min(1) ],
      brand:['',Validators.maxLength(20) ],
      category:['',Validators.maxLength(20) ],
      thumbnail:['' ,Validators.minLength(7) ],
      imgs: ['', Validators.minLength(7) ]
    });
  }

  getAllProducts(){
  this.productsServ.getAllProducts().subscribe((product:any) =>{
    this.allProducts = product['products'];
    console.log(this.allProducts)
  })
  }

  updateProduct(item:any, id:any){
    this.allProducts[id].title =this.title;
    this.allProducts[id].description=this.description;
    this.allProducts[id].price = this.price;

  fetch('https://dummyjson.com/products/'+ item.id, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    // title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);

    this.enablePopup=false;
    this.editProduct.reset();
  }
  editing(item:any,id:any){
    this.title = item.title;
    this.description =item.description;
    this.price= item.price;
    
    this.editProduct.get("title")?.setValue(item.title)
    this.editProduct.get("description")?.setValue(item.description)
    this.editProduct.get("price")?.setValue(item.price)
    this.editProduct.get("discount")?.setValue(item.discountPercentage)
    this.editProduct.get("rating")?.setValue(item.rating)
    this.editProduct.get("stock")?.setValue(item.stock)
    this.editProduct.get("brand")?.setValue(item.brand)
    this.editProduct.get("category")?.setValue(item.category)
    this.editProduct.get("thumbnail")?.setValue(item.thumbnail)
    console.log(this.editProduct)
    this.item = item;
    this.id= id;
    
    this.enablePopup =true;
  }
  close(){
    this.enablePopup =false;
  }

deleteItem(id:any){

  let indexForRemoval = id;
  let valueToRemove = [this.allProducts[indexForRemoval]];
  this.allProducts = this.allProducts.filter((element:any) => !valueToRemove.includes(element));

// return this.allProducts
fetch('https://dummyjson.com/products/'+id  , {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);
}
}
