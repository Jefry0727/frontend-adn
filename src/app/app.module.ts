
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingComponent } from './parking/parking.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
// import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
