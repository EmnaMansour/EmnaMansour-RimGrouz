import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { HomeBannerComponent } from './home/home-banner/home-banner.component';
import { HomeProductDetailComponent } from './home/home-product-detail/home-product-detail.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [{path:'client' , component: ClientComponent ,
 children:[{path:'home' , component:HomeComponent} ,
 {path : 'home-products',component:HomeProductsComponent},
  { path:'home-banner' , component:HomeBannerComponent},
  {path :'home-product-detail',component:HomeProductDetailComponent},
  {path :'acceuil',component:AcceuilComponent},
 
{path :'about' ,component : AboutComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
