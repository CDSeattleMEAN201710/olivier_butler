import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from './../quotes'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  @Input() allQuotes

  processVote = (upDown, arrIdx) => {
    console.log('Got to the list', arrIdx)
    if (upDown == 'up'){
      this.allQuotes[arrIdx].vote += 1
    } else if (upDown == 'down') {
      this.allQuotes[arrIdx].vote -= 1
    }

    this.allQuotes.sort((a,b)=>{
      if (a.vote == b.vote){
        return 0
      } else if (a.vote < b.vote) {
        return 1
      }
      return -1
    })
  }

}
