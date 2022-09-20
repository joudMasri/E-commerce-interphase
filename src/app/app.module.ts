import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { PagesComponent } from './components/pages/pages.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { TooltipDirective } from './custom Directive/tooltip.directive';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductCardComponent } from './components/edit-product-card/edit-product-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    PagesComponent,
    ContactComponent,
    CartComponent,
    ItemComponent,
    ItemDetailsComponent,
    TooltipDirective,
    FilterPipe,
    AdminComponent,
    DashboardComponent,
    EditProductsComponent,
    AddProductComponent,
    EditProductCardComponent,
    PageNotFoundComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
