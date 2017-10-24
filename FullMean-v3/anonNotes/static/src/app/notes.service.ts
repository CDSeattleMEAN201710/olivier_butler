import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import "rxjs"
import "rxjs/add/operator/map"

@Injectable()
export class NotesService {

  constructor(private _http: Http) { }
  getNotes(){
    console.log("Service getting notes")
    this._http.get('/note').map(data=>data.json()).toPromise()
    .then( data => {
      console.log("Yay managed to get notes", data)
    })
    .catch( err => {
      console.log("Fucked up getting notes", err)
    })
  }
}
