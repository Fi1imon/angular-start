import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DickComponent} from "./dick/dick.component";
import { PussyComponent } from './pussy/pussy.component';
import { SexComponent } from './sex/sex.component';
import {AnalComponent} from "./anal/anal.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DickComponent,
    PussyComponent,
    SexComponent,
    AnalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
