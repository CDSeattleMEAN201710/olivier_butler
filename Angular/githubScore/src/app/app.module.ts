import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GithubQueryService } from './github-query.service'

import { AppComponent } from './app.component';
import { GithubqueryComponent } from './githubquery/githubquery.component';
import { DisplayresultComponent } from './displayresult/displayresult.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubqueryComponent,
    DisplayresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GithubQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
