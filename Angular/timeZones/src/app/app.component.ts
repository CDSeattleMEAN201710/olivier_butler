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
    { name: 'Mexico', offset: -6, active: false },
    { name: 'Chad', offset: 1, active: false },
    { name: 'Belarus', offset: 3, active: false },
    { name: 'India', offset: 5.5, active: false },
    { name: 'China', offset: 8, active: false }
  ]
  adjustTime = (inputIdx:number) => {
    console.log(this.time)
    this.time = new Date(new Date().getTime() + (this.zones[inputIdx].offset * 3600000))
    for (let totalIdx in this.zones){
      if(Number(totalIdx) == inputIdx){
        console.log(`Yay, ${this.zones[totalIdx].name}`)
        this.zones[totalIdx].active = true
      } else {
        console.log(this.zones[totalIdx].name)
        this.zones[totalIdx].active = false
      }
      //console.log(this.zones)
    }
  }
}
