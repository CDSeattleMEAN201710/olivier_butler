import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [
    { 'comment' : "It's like random code was stapled together by a madman", 
      'author': "Olivier Butler",
      'vote' : 6
    }];
  processQuote = (event) => {
    console.log(event)
    this.quotes.push(event)
  }
}
