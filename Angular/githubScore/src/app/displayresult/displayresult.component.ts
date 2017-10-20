import { Component, OnInit } from '@angular/core';
import { GithubQueryService } from './../github-query.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-displayresult',
  templateUrl: './displayresult.component.html',
  styleUrls: ['./displayresult.component.css']
})
export class DisplayresultComponent implements OnInit {

  constructor(private githubQuery: GithubQueryService) { 
    this.githubQuery.userData().subscribe( this.processData )
  }

  score: number
  message: string
  color: string
  messages = [
    [20, "Needs Work", "red"],
    [50, "Decent Start", "orange"],
    [100, "Doing Good", "black"],
    [200, "Great Job", "green"],
    ["Unrealistic", "blue"]
  ]

  processData = (data) => {
    this.score = data.score
    for (let message of this.messages){
      console.log (message)
      if (typeof message[0] === "string"){
        this.message = String(message[0])
        this.color = String(message[1])
        break
      }
      if (message[0] > data.score){
        this.message = String(message[1])
        this.color = String(message[2])
        break
      }
    }
  }

  ngOnInit() {
    
  }

}
