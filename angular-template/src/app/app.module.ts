import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlaskapiService } from "./flaskapi.service";
import { EnviromentComponent } from './enviroment/enviroment.component';
import { ElementComponent } from './element/element.component';


@NgModule({
  declarations: [
    AppComponent,
    EnviromentComponent,
    ElementComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FlaskapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
