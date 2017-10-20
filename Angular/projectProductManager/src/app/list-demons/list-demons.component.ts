import { Component, OnInit } from '@angular/core';
import { ManageDemonsService } from './../manage-demons.service'
import { Demon } from './../demon'

@Component({
  selector: 'app-list-demons',
  templateUrl: './list-demons.component.html',
  styleUrls: ['./list-demons.component.css']
})
export class ListDemonsComponent implements OnInit {

  constructor(private demonManager: ManageDemonsService) { 
    this.hellPop = this.demonManager.demonCage
  }  

  ngOnInit() {
    
  }

  hellPop: any

}
