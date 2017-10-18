import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from './../quotes'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { 
    this.quote = new Quotes()
  }

  ngOnInit() {
  }

  quote: Quotes

  @Output() quoteSaved = new EventEmitter()

  save = () => {
    console.log("Pressed Save")
    this.quote.vote = 0
    this.quoteSaved.emit(this.quote)
    this.quote = new Quotes()
  }
}
