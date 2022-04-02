import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule
   ],
  declarations: [ 
    AppComponent,
    TestComponent,
    ErrorPageComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
