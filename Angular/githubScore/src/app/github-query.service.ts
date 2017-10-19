import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs'
import 'rxjs/add/operator/map'

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GithubQueryService {

  constructor(private http: Http) {
  }

  subject = new Subject<any>()
  baseUrl = "https://api.github.com/users/"
  
  getUser(username){
    console.log(username)
    this.http.get( this.baseUrl + username ).map( data => data.json() ).toPromise()
    .then(response => {
      console.log(response)
      this.subject.next({score: response.followers + response.public_repos})
    })
    .catch(err => {console.log(err)})
  }

  userData(){
    return this.subject.asObservable()
  }
}
