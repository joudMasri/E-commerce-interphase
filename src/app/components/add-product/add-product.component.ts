import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct: FormGroup | any;
  allProducts = [];

  price:any;
  title:any;
  description:any;
  thumbnail:any;
  discount:any;
  rating:any;
  stock:any;
  brand:any;
  category:any;


  constructor(private productsServ : ProductsService, private build: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllProducts();
  }

  private initForm() {
    this.addProduct = this.build.group({
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

  add(){
    // const model = this.addProduct.value;
    // this.productsServ.createProduct(model).subscribe((res) =>{
    //   alert("ADDED SUCESS");
    // })
    // this.addProduct.reset()
    // alert('yes')
    fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
            title: this.title,
            description: this.description,
            price: this.price,
            discountPercentage:this.discount,
            rating: this.rating,
            stock: this.stock,
            brand: this.brand,
            category: this.category,
            thumbnail: this.thumbnail,
            images:[{
              sda:"dsa",
              sdada:"dsa",
              sdasa:"dsa"
            }] 
    })
    })
    .then(res => res.json())
    .then(console.log);
    this.addProduct.reset();
  }

  getAllProducts(){
    this.productsServ.getAllProducts().subscribe((product:any) =>{
      this.allProducts = product['products'];
    })
  }
}
