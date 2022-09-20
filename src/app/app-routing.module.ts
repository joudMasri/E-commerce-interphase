import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PagesComponent } from './components/pages/pages.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'pages', component:PagesComponent},
  {path:'cart', component:CartComponent},
  {path:'product/:id ', component:ItemDetailsComponent},
  {path:'item-details', component:ItemDetailsComponent},
  {path:'admin', component:AdminComponent ,children:[
    {path:'',pathMatch:'full',redirectTo:'add'},
    {path:'edit', component:EditProductsComponent},
    {path:'add',component:AddProductComponent}
  ]},
  {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
