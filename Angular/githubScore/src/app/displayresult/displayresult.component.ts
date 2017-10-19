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
    this.resultSubscription = this.githubQuery.userData().subscribe( data => {this.resultData = data} )
  }

  resultSubscription: any
  resultData: any

  ngOnInit() {
    
  }

}
