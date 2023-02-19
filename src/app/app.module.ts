import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import {FormsModule} from '@angular/forms';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { NgModule } from '@angular/core';


const allLinks:Routes = [
  {path:'admin',component: AdminComponent},
  {path:'normal',component:NormalUserComponent},
  
]
@NgModule({
  declarations: [
    AppComponent,
   
    AdminComponent,
        NormalUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }