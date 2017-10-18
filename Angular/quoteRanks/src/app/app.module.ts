import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { QuoteComponent } from './list/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
