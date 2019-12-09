import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitgoogleComponent } from './gitgoogle/gitgoogle.component';
import {  GitgoogleService } from './gitgoogle.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GitgoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // GitgoogleService,
    HttpClientModule ,
  ],
  providers: [GitgoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
