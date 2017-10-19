import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GithubQueryService {

  constructor() {
   }

  subject = new Subject<any>()
  
  getUser(username){
    console.log(username)
    this.subject.next({data: username})
  }

  userData(){
    return this.subject.asObservable()
  }
}
