import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { NotesService } from './../notes.service'

import "rxjs"
import "rxjs/add/operator/map"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allNoteState: Array<any>
  inputState: String

  constructor(
    private _http: Http,
    private _notes: NotesService
  ) { 
    console.log("Launching home module")
    this.getNotes()
  }

  ngOnInit() {
  }
  getNotes(){
    this._notes.getNotes().then( data => {
      console.log("Yay managed to get notes", data)
      this.allNoteState = data
    })
    .catch( err => {
      console.log("Fucked up getting notes", err)
    })
  }

  processSubmit(){
    console.log("The component is trying to submit", this.inputState)
    this._notes.makeNote(this.inputState).then(res => {
      console.log("All good! - Note service makeNote()")
      this.getNotes()
    })
    .catch( err => {
      console.log("Not good - Note service makeNote()")
    })
  }
}
