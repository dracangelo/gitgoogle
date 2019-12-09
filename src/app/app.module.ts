import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitgoogleComponent } from './gitgoogle/gitgoogle.component';
import {  GitgoogleService } from './gitgoogle.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"
@NgModule({
  declarations: [
    AppComponent,
    GitgoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
  ],
  providers: [GitgoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
