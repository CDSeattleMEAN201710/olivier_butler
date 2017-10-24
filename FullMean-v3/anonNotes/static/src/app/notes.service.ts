import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import "rxjs"
import "rxjs/add/operator/map"

@Injectable()
export class NotesService {

  constructor(private _http: Http) { }

  makeNote(note){
    console.log("Service posting a note", note)
    return this._http.post('/note', {note: note}).toPromise()
  }

  getNotes(){
    console.log("Service getting notes")
    return this._http.get('/note').map(data => data.json()).toPromise()
  }
}
