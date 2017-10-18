import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from './../../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() voteEvent = new EventEmitter()

  @Input() quote
  vote = (upDown) => {
    console.log('Voting button pressed', upDown)
    this.voteEvent.emit(upDown)
  }
}
