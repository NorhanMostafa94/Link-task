import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

const BASEMODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule
];

const COMPONENTS = [
  AppComponent
]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...BASEMODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
