import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { Page404Component } from './components/404/404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    SiteLayoutComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,

  ],
  providers: [DatePipe], 
  bootstrap: [AppComponent]
})
export class AppModule { }
