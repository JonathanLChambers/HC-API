import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
