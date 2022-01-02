import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';


const routes: Routes = [

  { path: '', redirectTo: '/client/acceuil', pathMatch: 'full' },
  { path: 'client',component:ClientComponent },
  { path: '**', component:PageNotFoundComponentComponent }

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
