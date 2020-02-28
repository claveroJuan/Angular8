import { CompAComponent } from './compa/compa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompbComponent } from './compb/compb.component';
import { CompcComponent } from './compc/compc.component';

import { FormsModule } from '@angular/forms'; //para trabajar con formularios
import { GokuComponent } from './goku/goku.component';
import { GohanComponent } from './gohan/gohan.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //para animaciones
import {MatButtonModule} from '@angular/material/button'; //para trabajar con botones de angular material

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompbComponent,
    CompcComponent,
    GokuComponent,
    GohanComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
