import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDemonsComponent } from './list-demons/list-demons.component';
import { SummonDemonComponent } from './summon-demon/summon-demon.component';
import { HomeComponent } from './home/home.component';
import { ManageDemonsService } from './manage-demons.service'

@NgModule({
  declarations: [
    AppComponent,
    ListDemonsComponent,
    SummonDemonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ManageDemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
