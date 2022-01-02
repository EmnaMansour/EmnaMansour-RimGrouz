import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ClientComponent } from './client.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    ClientComponent,
    AcceuilComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    AboutModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
