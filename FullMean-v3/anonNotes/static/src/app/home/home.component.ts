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

  noteState: Array<any>

  constructor(
    private _http: Http,
    private _notes: NotesService
  ) { 
    console.log("Launching home module")
    this._notes.getNotes()
  }

  ngOnInit() {
  }
}
