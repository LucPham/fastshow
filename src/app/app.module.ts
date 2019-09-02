import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddminModule } from './addministration/addmin.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRouteModule } from './app.route';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRouteModule,
    AddminModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
