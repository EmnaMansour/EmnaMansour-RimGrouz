import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    ClientModule,
    AdminModule,
    AppRoutingModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
