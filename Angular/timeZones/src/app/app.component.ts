import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.offset = this.time.getTimezoneOffset()
    console.log(`My current offset is ${this.offset}`)
  }
  title = 'Time Zone Switcher';
  time = new Date()
  offset
  zones = [
    { name: 'Mexico', offset: -6 },
    { name: 'Chad', offset: 1 },
    { name: 'Belarus', offset: 3 },
    { name: 'India', offset: 5.5 },
    { name: 'China', offset: 8 }
  ]
  adjustTime = (offset:number) => {
    console.log(offset)
    console.log(this.time)
    this.time = new Date(new Date().getTime() + (offset * 60 * 60000))
  }
}
