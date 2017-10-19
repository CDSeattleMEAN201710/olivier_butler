import { Component, OnInit, Input } from '@angular/core';
import { GithubQueryService } from './../github-query.service';

@Component({
  selector: 'app-githubquery',
  templateUrl: './githubquery.component.html',
  styleUrls: ['./githubquery.component.css']
})
export class GithubqueryComponent implements OnInit {

  constructor(private githubQuery: GithubQueryService) { 

  }

  ngOnInit() {
  }

  input: string
  
  processSubmit = () => {
    this.githubQuery.getUser(this.input)
  }

}
