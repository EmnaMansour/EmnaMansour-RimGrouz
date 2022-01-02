import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponentComponent } from './product-add-component/product-add-component.component';


@NgModule({
  declarations: [
    GestprodComponent,
    ProductAddComponentComponent
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    GestprodComponent
  ]
})
export class GestprodModule { }
