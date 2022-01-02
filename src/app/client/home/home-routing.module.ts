import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';

import { HomeComponent } from './home.component';


const routes: Routes = [{path:'home' , component: HomeComponent ,
 children:[{ path:'home-banner' , component:HomeBannerComponent},
{ path :'home-product-detail' , component : HomeProductDetailComponent},
{ path :'home-products' , component : HomeProductsComponent}]
}];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
